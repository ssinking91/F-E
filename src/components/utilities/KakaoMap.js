/* global kakao */
import { useDispatch } from "react-redux";
import { getPrivateListDB, getPublicListDB } from "../redux/modules/allList";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./KakaoMap.css";

export default function KakaoMap() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPrivateListDB(""));
    dispatch(getPublicListDB(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const privateList = useSelector((store) => store.allList.privateList);
  const location = useSelector((store) => store.allList.adress);
  console.log(location);

  // var geocoder = new kakao.maps.services.Geocoder();
  let locates = [];
  // // 주소로 좌표를 검색합니다
  // for (let i = 0; i < location.length; i++) {
  //   geocoder.addressSearch(location[i], function (result, status) {
  //     // 정상적으로 검색이 완료됐으면
  //     if (status === kakao.maps.services.Status.OK) {
  //       locates.push([result[0].y, result[0].x]);
  //       if (i === location.length - 1) {
  //         console.log(locates);
  //       }
  //     }
  //   });
  // }

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56682, 126.97865), // 지도의 중심좌표
        level: 11, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    for (let i = 0; i < location.length; i++) {
      geocoder.addressSearch(location[i], function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          // var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          locates.push([result[0].y, result[0].x]);

          if (i === location.length - 1) {
            var clusterer = new kakao.maps.MarkerClusterer({
              map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
              averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
              minLevel: 5, // 클러스터 할 최소 지도 레벨
            });

            var markers = locates.map((location) => {
              return new kakao.maps.Marker({
                position: new kakao.maps.LatLng(location[0], location[1]),
              });
            });

            clusterer.addMarkers(markers);
          }
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="map_wrap">
        <div
          id="map"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        ></div>
      </div>
    </>
  );
}
