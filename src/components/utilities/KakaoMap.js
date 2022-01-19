/* global kakao */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { saveState, changeCoords } from "../redux/modules/map";
import "./style.css";
import defaultLogoImage from "../../images/defaultLogoImage.svg";

export default function KakaoMap() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivateListDB(""));
    dispatch(getPublicListDB(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const publicList = useSelector((state) => state.allList.publicList);
  const privateList = useSelector((state) => state.allList.privateList);
  console.log(publicList);

  const locate = useSelector((state) => state.allList);
  const publicAdress = new Set(locate.publicAdress);
  const privateAdress = new Set(locate.privateAdress);
  const location = [...publicAdress, ...privateAdress];
  let locates = [];
  // console.log(publicList);

  // click 한 마커의 주소를 state로 저장/변환
  const [clickAdress, setClickAdress] = useState(null);

  // AsideSection -> 클릭한 카드의 주소
  const cardClicked = useSelector((state) => state.map.clicked);
  console.log(cardClicked);

  useEffect(() => {
    dispatch(saveState(clickAdress));
  }, [dispatch, clickAdress]);

  // drag_end 시킨 현재 지도의 중앙 좌표를 주소로 변환시킨것을 state로 저장/변환
  const [saveLocation, setSaveLocation] = useState("");
  useEffect(() => {
    console.log("useEffect발동");
    dispatch(saveState(saveLocation));
  }, [dispatch, saveLocation]);

  // 카드를 클릭할때마다 clickMove 함수를 실행
  useEffect(() => {
    clickMove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardClicked]);

  // 카드를 클릭했을때의 주소를 얻어내 좌표를 얻어 전역 state로 관리해줍니다.
  const clickMove = () => {
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // AsideSection 의 카드를 클릭했을때의 주소를 좌표로 변환 후 지도중심으로 이동시킵니다.
    geocoder.addressSearch(cardClicked, async function (result, status) {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const moveLatLng = new kakao.maps.LatLng(result[0].y, result[0].x);
        console.log(result[0].y, result[0].x);
        dispatch(changeCoords(moveLatLng));
      } else {
        console.log("좌표변환 실패, 주소오류");
        if (cardClicked) {
          console.log(cardClicked.split("(")[0]);
          const cardClickedSplit = cardClicked.split("(")[0];
          geocoder.addressSearch(
            cardClickedSplit,
            async function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                const moveLatLng = new kakao.maps.LatLng(
                  result[0].y,
                  result[0].x
                );
                console.log(result[0].y, result[0].x);
                dispatch(changeCoords(moveLatLng));
              }
            }
          );
        }
      }
    });
  };

  const coords = useSelector((state) => state.map.coords);

  useEffect(() => {
    console.log("coords 변경, mapFunc() 실행");
    mapFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords]);

  useEffect(() => {
    console.log("mapFunc실행");
    console.log(location.length);
    mapFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.length >= 100]); // 로케이션의 값이 바뀔 때 마다

  async function mapFunc() {
    var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 999 }),
      contentNode = document.createElement("div"), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
      markers = [], // 마커를 담을 배열입니다
      currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
        level: 8, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    if (coords) {
      map.panTo(coords);
      const position = map.getCenter();
      console.log(coords);
      console.log(position);
      const Lng = position.Ma;
      const Lat = position.La;
      map.setLevel(2, {
        anchor: new kakao.maps.LatLng(Lng, Lat),
        animate: {
          duration: 500,
        },
      });
    }
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(map);

    // 지도에 idle 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "idle", searchPlaces);

    // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
    contentNode.className = "placeinfo_wrap";

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
    addEventHandle(contentNode, "mousedown", kakao.maps.event.preventMap);
    addEventHandle(contentNode, "touchstart", kakao.maps.event.preventMap);

    // 커스텀 오버레이 컨텐츠를 설정합니다
    placeOverlay.setContent(contentNode);

    // 각 카테고리에 클릭 이벤트를 등록합니다
    addCategoryClickEvent();

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    function addEventHandle(target, type, callback) {
      if (target.addEventListener) {
        target.addEventListener(type, callback);
      } else {
        target.attachEvent("on" + type, callback);
      }
    }

    // 카테고리 검색을 요청하는 함수입니다
    function searchPlaces() {
      if (!currCategory) {
        return;
      }

      // 커스텀 오버레이를 숨깁니다
      placeOverlay.setMap(null);

      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();

      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
      } else if (status === kakao.maps.services.Status.ERROR) {
        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
      }
    }

    // 지도에 마커를 표출하는 함수입니다
    function displayPlaces(places) {
      // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
      // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
      var order = document
        .getElementById(currCategory)
        .getAttribute("data-order");

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = addMarker(
          new kakao.maps.LatLng(places[i].y, places[i].x),
          order
        );

        // 마커와 검색결과 항목을 클릭 했을 때
        // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
        (function (marker, place) {
          kakao.maps.event.addListener(marker, "click", function () {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, order) {
      var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
    function displayPlaceInfo(place) {
      var content =
        '<div class="placeinfo">' +
        '   <a class="title" href="' +
        place.place_url +
        '" target="_blank" title="' +
        place.place_name +
        '">' +
        place.place_name +
        "</a>";

      if (place.road_address_name) {
        content +=
          '    <span title="' +
          place.road_address_name +
          '">' +
          place.road_address_name +
          "</span>" +
          '  <span class="jibun" title="' +
          place.address_name +
          '">(지번 : ' +
          place.address_name +
          ")</span>";
      } else {
        content +=
          '    <span title="' +
          place.address_name +
          '">' +
          place.address_name +
          "</span>";
      }

      content +=
        '    <span class="tel">' +
        place.phone +
        "</span>" +
        "</div>" +
        '<div class="after"></div>';

      contentNode.innerHTML = content;
      placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    }

    // 각 카테고리에 클릭 이벤트를 등록합니다
    function addCategoryClickEvent() {
      var category = document.getElementById("category"),
        children = category.children;

      for (var i = 0; i < children.length; i++) {
        children[i].onclick = onClickCategory;
      }
    }

    // 카테고리를 클릭했을 때 호출되는 함수입니다
    function onClickCategory() {
      var id = this.id,
        className = this.className;

      placeOverlay.setMap(null);

      if (className === "on") {
        currCategory = "";
        changeCategoryClass();
        removeMarker();
      } else {
        currCategory = id;
        changeCategoryClass(this);
        searchPlaces();
      }
    }

    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    function changeCategoryClass(el) {
      var category = document.getElementById("category"),
        children = category.children,
        i;

      for (i = 0; i < children.length; i++) {
        children[i].className = "";
      }

      if (el) {
        el.className = "on";
      }
    }
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.BOTTOM);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMLEFT);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    if (location) {
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 4, // 클러스터 할 최소 지도 레벨
        calculator: [3, 5, 10], // 단위별로 클러스터의 스타일링 ex) n개 이하의 클러스터에는 x의 스타일링 적용 현재는 default 속성입니다.
        minClusterSize: 1, // 클러스터를 만들 최소 단위 갯수 (현재 1개이상이면 표기)
      });

      kakao.maps.event.addListener(
        clusterer,
        "clusterclick",
        function (cluster) {
          const latlng = cluster.getCenter();
          searchDetailAddrFromCoords(
            latlng.getLng(),
            latlng.getLat(),
            function (result, status) {
              if (status === kakao.maps.services.Status.OK) {
                let location = result[0].address.region_1depth_name;
                if (location === "충북" || location === "충남")
                  location = "충청";
                if (location === "경북" || location === "경남")
                  location = "경상";
                if (location === "전북" || location === "전남")
                  location = "전라";
                if (location === "세종특별자치시") location = "세종";
                setSaveLocation(location);
              }
            }
          );
        }
      );

      kakao.maps.event.addListener(map, "dragend", function () {
        // 지도의 중심좌표를 얻어옵니다
        const latlng = map.getCenter();
        //위도
        const lat = latlng.getLat();
        //경도
        const lng = latlng.getLng();

        searchDetailAddrFromCoords(lng, lat, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            let location = result[0].address.region_1depth_name;
            if (location === "충북" || location === "충남") location = "충청";
            if (location === "경북" || location === "경남") location = "경상";
            if (location === "전북" || location === "전남") location = "전라";
            if (location === "세종특별자치시") location = "세종";
            setSaveLocation(location);
          }
        });
      });

      function searchDetailAddrFromCoords(lng, lat, callback) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(lng, lat, callback);
      }

      // 처음 지도페이지에 들어왔을때 지도중앙값의 주소정보를 띄워줌
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);

      // 지도에 idle(중심좌표, 확대,축소) 이벤트가 끝나고 나서 함수가 실행됩니다.
      kakao.maps.event.addListener(map, "idle", function () {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });

      function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }

      function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var infoDiv = document.getElementById("centerAddr");

          for (var i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === "H") {
              infoDiv.innerHTML = result[i].address_name;
              break;
            }
          }
        }
      }
      // 모든 주소들을 위도/경도 좌표로 변환
      for (let i = 0; i < location.length; i++) {
        geocoder.addressSearch(location[i], async function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            locates.push([i + 1, result[0].y, result[0].x, location[i]]);

            const markerImageUrl =
                "https://www.habitat.org/sites/default/files/styles/780w/public/2018-05/icon-house.png?itok=beg84oiG",
              markerImageSize = new kakao.maps.Size(60, 45), // 마커 이미지의 크기
              markerImageOptions = {
                offset: new kakao.maps.Point(30, -20), // 마커 좌표에 일치시킬 이미지 안의 좌표
              };

            // 마커 이미지를 생성한다
            const markerImage = new kakao.maps.MarkerImage(
              markerImageUrl,
              markerImageSize,
              markerImageOptions
            );
            /* for문의 마지막 작업이 되었을때 */
            if (i === location.length - 1) {
              /* awiat promise.all을 사용하지 않으면 응답시간이 오래 걸려 결과값으로 넘겨받지 못한
               데이터가 있으면 undefined가 뜹니다.
               이를 방지하고자 await promise.all을 사용했습니다. */
              const results = await Promise.all(locates);
              results.sort((a, b) => a[0] - b[0]);
              /* 요청을 보냈을때 응답이 먼저 오는 순으로 locates에 담기기 때문에 순서가 뒤죽박죽 섞여
              요청을 보낸것과 순서를 맞춰주기 위해 sort()를 사용하였습니다.
              요청을 보낼때 n번째 작업이라는 것을 명시해주고, 이것을 기준으로 정렬을 하였습니다.
              */

              for (let j = 0; j < results.length; j++) {
                const marker = new kakao.maps.Marker({
                  position: new kakao.maps.LatLng(results[j][1], results[j][2]),
                  clickable: true,
                  image: markerImage,
                });

                const publicInfo = publicList.filter(
                  (lists) => lists.address === `${results[j][3]}`
                );
                let privateInfo = [];
                if (publicInfo.length > 0) {
                } else {
                  // results[j][3]을 공영데이터 기준으로 필터링했을때 결과를 찾아내지 못하면 민영데이터로 필터링 시작
                  privateInfo = privateList.result.filter(
                    (lists) => lists.address === `${results[j][3]}`
                  );
                }

                // clusterer 에 marker 를 하나씩 추가합니다.
                clusterer.addMarker(marker);

                // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
                const iwContent = ` 
                                    
                                        <div style="height:190px; width:453px; border: 1px #20D7FF solid;">
                                        
                                          <div style="height:54px; width:453px; border-bottom: 1px black solid; background-color:#20D7FF; display:flex; justify-content: center; align-items: center;">
        
                                              <span style="font-size: 28px; font-weight: bold; color: #FFFFFF;">
                                                dot.zip 
                                              </span>

                                          </div>   
                                          <div style="height:136px; width:453px; display:flex; justify-content: center; align-items: center;">           
                                          
                                            <div style="height:111px; width:418px; display:flex;">

                                                <div 
                                                  style="
                                                    height:111px; 
                                                    width:111px; 
                                                    margin-right: 16px; 
                                                    border: 1px #20D7FF solid; 
                                                    border-radius: 20px;
                                                    background-image: url(${
                                                      publicInfo.length > 0
                                                        ? publicInfo[0].ImgUrl
                                                          ? publicInfo[0].ImgUrl
                                                          : defaultLogoImage
                                                        : privateInfo[0].ImgUrl
                                                        ? privateInfo[0].ImgUrl
                                                        : defaultLogoImage
                                                    });
                                                    background-size: cover;
                                                    background-repeat: no-repeat;
                                                    background-position: center;
                                                    ">
                                                </div>

                                                <div style="height:111px; width:291px; display: flex; flex-direction: column; flex-wrap: wrap;">

                                                  <div style="height: 25px; margin: 0 0 4px 0;">
                                                    <span style="font-size: 14px; font-weight: bold; color: #000000; line-height: 25px; height: 25px; color: #20D7FF; ">
                                                       [ ${
                                                         publicInfo.length > 0
                                                           ? "공영"
                                                           : "민영"
                                                       } ]
                                                     </span>
                                                  </div>

                                                  <div style="display: flex; flex-wrap: wrap; height: 50px; margin: 0 0 6px 0;">
                                                    <span style="font-size: 16px; font-weight: bold; color: #000000; line-height: 25px; height: 25px; color: #000000">
                                                      ${
                                                        publicInfo.length > 0
                                                          ? publicInfo[0]
                                                              .panName.length >
                                                            46
                                                            ? publicInfo[0].panName.substr(
                                                                0,
                                                                43
                                                              ) + "..."
                                                            : publicInfo[0]
                                                                .panName
                                                          : privateInfo[0]
                                                              .houseName
                                                      }
                                                    </span>
                                                  </div>
                                                  
                                                  <div style="display: flex; ">
                                                      <span style="font-size: 12px; font-weight: bold; color: #A5AAB6; line-height: 19px;  margin: 0 15px 0 0;">
                                                          <a href=${
                                                            publicInfo.length >
                                                            0
                                                              ? `${publicInfo[0].detailUrl}`
                                                              : `${privateInfo[0].detailUrl}`
                                                          } 
                                                          target="_blank">
                                                            [ 청약하러가기 ]
                                                          </a>
                                                      </span>
                                                      <span style="font-size: 12px; font-weight: bold; color: #A5AAB6; line-height: 19px;">
                                                          <a href=${
                                                            publicInfo.length >
                                                            0
                                                              ? `${publicInfo[0].fileUrl}`
                                                              : null
                                                          }>
                                                            [ 모집공고문 다운로드받기 ]
                                                          </a>
                                                      </span>
                                                   </div>
                                                </div>

                                                </div>
                                            </div>
                                        </div>
                                  
                `, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                  iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

                // 인포윈도우를 생성합니다
                const infowindow = new kakao.maps.InfoWindow({
                  content: iwContent,
                  removable: iwRemoveable,
                });

                // 마커에 클릭이벤트를 등록하며, 마커 위에 인포윈도우를 표시해줍니다.
                kakao.maps.event.addListener(marker, "click", () => {
                  infowindow.open(map, marker);
                  setClickAdress(results[j][3].slice(0, 2));
                });
                // 지도의 줌이 확대되거나 축소 이벤트가 발생할 경우, 인포윈도우가 닫힙니다.
                kakao.maps.event.addListener(map, "zoom_changed", () => {
                  infowindow.close();
                });
              }
            }
          } else {
            console.log(location[i]);
            location[i] = location[i].split("일원")[0];
          }
        });
      }
    }
  }

  return (
    <>
      <Div id="map">
        <ChangeZone>
          <Title>지도중심기준 행정동 주소정보</Title>
          <Center id="centerAddr"></Center>
        </ChangeZone>
        <ul id="category">
          <li id="BK9" data-order="0">
            <span class="category_bg bank"></span>
            은행
          </li>
          <li id="MT1" data-order="1">
            <span class="category_bg mart"></span>
            마트
          </li>
          <li id="PM9" data-order="2">
            <span class="category_bg pharmacy"></span>
            약국
          </li>
          <li id="OL7" data-order="3">
            <span class="category_bg oil"></span>
            주유소
          </li>
          <li id="CE7" data-order="4">
            <span class="category_bg cafe"></span>
            카페
          </li>
          <li id="CS2" data-order="5">
            <span class="category_bg store"></span>
            편의점
          </li>
        </ul>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;
  height: 84vh;
  position: relative;
  top: 148px;
`;

const ChangeZone = styled.div`
  position: absolute;
  left: 10px;
  top: 75px;
  border: 1px solid #999;
  border-radius: 2px;
  background: #fff;
  background: rgba(255, 255, 255, 0.6);
  z-index: 2;
  padding: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
`;
const Center = styled.div`
  display: block;
  margin-top: 2px;
  font-weight: normal;
`;
