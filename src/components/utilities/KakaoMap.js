/* global kakao */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { saveState } from "../redux/modules/map";
import "./style.css";
import logo from "../../images/logo.svg";

export default function KakaoMap() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivateListDB(""));
    dispatch(getPublicListDB(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [clickAdress, setClickAdress] = useState(null);

  saveState(clickAdress);

  const publicList = useSelector((state) => state.allList.publicList);
  const privateList = useSelector((state) => state.allList.privateList);
  console.log(publicList);
  console.log(privateList);
  const locate = useSelector((state) => state.allList);
  const publicAdress = new Set(locate.publicAdress);
  const privateAdress = new Set(locate.privateAdress);
  const location = [...publicAdress, ...privateAdress];
  let locates = [];
  // console.log(publicList);
  useEffect(() => {
    console.log("mapFunc실행");
    console.log(location.length);
    mapFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.length >= 100]); // 로케이션의 값이 바뀔 때 마다

  async function mapFunc() {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
        level: 9, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

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
        calculator: [3, 5, 10],
        minClusterSize: 1,
      });
      kakao.maps.event.addListener(
        clusterer,
        "clusterclick",
        function (cluster) {
          console.log(cluster);
        }
      );

      for (let i = 0; i < location.length; i++) {
        geocoder.addressSearch(location[i], async function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            locates.push([i + 1, result[0].y, result[0].x, location[i]]);
            // console.log(`${i}번째, ${result[0].y} , ${result[0].x}`);

            var markerImageUrl =
                "https://www.habitat.org/sites/default/files/styles/780w/public/2018-05/icon-house.png?itok=beg84oiG",
              markerImageSize = new kakao.maps.Size(60, 45), // 마커 이미지의 크기
              markerImageOptions = {
                offset: new kakao.maps.Point(30, -20), // 마커 좌표에 일치시킬 이미지 안의 좌표
              };

            // 마커 이미지를 생성한다
            var markerImage = new kakao.maps.MarkerImage(
              markerImageUrl,
              markerImageSize,
              markerImageOptions
            );

            if (i === location.length - 1) {
              const results = await Promise.all(locates);
              results.sort((a, b) => a[0] - b[0]);
              // console.log(locates);
              // console.log(results);
              for (let j = 0; j < results.length; j++) {
                // console.log(results[j]);
                const marker = new kakao.maps.Marker({
                  position: new kakao.maps.LatLng(results[j][1], results[j][2]),
                  clickable: true,
                  image: markerImage,
                });
                console.log(results[j][3]);
                const publicInfo = publicList.filter(
                  (lists) => lists.address === `${results[j][3]}`
                );
                let privateInfo = [];
                if (publicInfo.length > 0) {
                  console.log(publicInfo);
                } else {
                  // results[j][3]을 공영데이터 기준으로 필터링했을때 결과를 찾아내지 못하면 민영데이터로 필터링 시작
                  privateInfo = privateList.filter(
                    (lists) => lists.address === `${results[j][3]}`
                  );
                  console.log(`민영자료`, privateInfo);
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
                                                        : privateInfo[0].ImgUrl
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
                  setClickAdress(results[j][3]);
                });
                // 지도의 줌이 확대되거나 축소 이벤트가 발생할 경우, 인포윈도우가 닫힙니다.
                kakao.maps.event.addListener(map, "zoom_changed", () => {
                  infowindow.close();
                });
              }
            }

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            // map.setCenter(coords);
          }
        });
      }
      kakao.maps.event.addListener(map, "dragend", function () {
        // 지도의  레벨을 얻어옵니다
        // const level = map.getLevel();
        // 지도의 중심좌표를 얻어옵니다
        const latlng = map.getCenter();
        //위도
        const lat = latlng.getLat();
        //경도
        const lng = latlng.getLng();
        console.log(lat, lng);

        // geocoder.coord2RegionCode(latlng.getLng(), latlng.getLat(), callback);
      });
    }
  }

  return (
    <>
      <Div id="map"></Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;
  height: 83vh;
  position: relative;
  top: 148px;
`;
