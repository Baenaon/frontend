import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Mapimg from "./mapimg";

const dummyData = [
  { location_name: "경비실 1", lat: 121, long: 43, postcount: 3 },
  { location_name: "경비실 1", lat: 121, long: 43, postcount: 3 },
  { location_name: "경비실 1", lat: 121, long: 43, postcount: 3 },
];

function Map() {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1b938e42e92a3fdd1cc9f706ac5c6bfd&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        };
        const map = new window.kakao.maps.Map(container, options);

        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";

        const imageSize = new kakao.maps.Size(64, 69);

        const imageOption = { offset: new kakao.maps.Point(27, 69) };

        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return <MapContainer id="map" />;
}
const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;
export default Map;
