import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Mapimg from "./mapimg";
import axios from "axios";

// 더미데이터입니다
// {
//   locationList: [
//     {
//       locationName: "경비실 1",
//       lat: 33.450701,
//       long: 126.570667,
//       postCount: 3,
//     },
//     { locationName: "경비실 1", lat: 33.4508, long: 126.5702, postCount: 3 },
//     { locationName: "경비실 1", lat: 33.4509, long: 126.5709, postCount: 3 },
//   ];
// }

function Map() {
  // const location_list = {
  //   locationList: [
  //     {
  //       locationName: "경비실 1",
  //       lat: 33.450701,
  //       long: 126.570667,
  //       postCount: 3,
  //     },
  //     { locationName: "경비실 1", lat: 33.4508, long: 126.5702, postCount: 3 },
  //     { locationName: "경비실 1", lat: 33.4509, long: 126.57, postCount: 3 },
  //   ],
  // };

  const [location_list, setLocationList] = useState({});

  useEffect(() => {
    axios
      .get("/dlkjsfd")
      .then(function (response) {
        setLocationList(response.data.locationList);
      })
      .catch(function (error) {
        console.log(error);
      });

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

        for (const i = 0; i < location_list.locationList.length; i++) {
          const imageSize = new kakao.maps.Size(64, 69);
          const imageOption = { offset: new kakao.maps.Point(27, 69) };
          const markerPosition = new window.kakao.maps.LatLng(
            // location_list.locationList[i].lat,
            // location_list.locationList[i].long
            location_list[i].lat,
            location_list[i].long
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
        }
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
