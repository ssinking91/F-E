/* global kakao */
import { useDispatch } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import "./style.css";

export default function KakaoMap() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getPrivateListDB(""));
    dispatch(getPublicListDB(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const publicList = useSelector((stto) => stto.allList.publicList);
  const location = useSelector((state) => state.allList.adress);
  console.log(location);
  let locates = [];
  // console.log(publicList);
  useEffect(() => {
    mapFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location !== undefined]);

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
        "clusterover",
        function (cluster) {
          console.log(cluster);
        }
      );
      for (let i = 0; i < location.length; i++) {
        let marker;
        geocoder.addressSearch(location[i], async function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            locates.push([i + 1, result[0].y, result[0].x]);
            // console.log(`${i}번째, ${result[0].y} , ${result[0].x}`);

            var markerImageUrl =
                "https://www.habitat.org/sites/default/files/styles/780w/public/2018-05/icon-house.png?itok=beg84oiG",
              markerImageSize = new kakao.maps.Size(80, 60), // 마커 이미지의 크기
              markerImageOptions = {
                offset: new kakao.maps.Point(20, 42), // 마커 좌표에 일치시킬 이미지 안의 좌표
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
              console.log(locates);
              console.log(results);
              for (let j = 0; j < results.length; j++) {
                marker = new kakao.maps.Marker({
                  position: new kakao.maps.LatLng(results[j][1], results[j][2]),
                  clickable: true,
                  image: markerImage,
                });
                clusterer.addMarker(marker);

                kakao.maps.event.addListener(marker, "click", function () {
                  console.log(results[j]);
                  console.log(location[j]);
                  // console.log(publicList[j].address);
                });
              }
            }

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            // map.setCenter(coords);
          }
        });
      }
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
  height: 100vh;
  position: relative;
`;
