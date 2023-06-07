import React, { useState } from "react";
import MapGL from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapCoffe = () => {
  const token =
    "pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRtNzYxMG1xbDNrbGo1N3k4a3NuciJ9.VHdXy-kV3UZLqcFF601K6A";
  const [viewport, setViewport] = useState({
    latitude: -6.914744,
    longitude: 107.609811,
    zoom: 12,
  });

  return (
    <MapGL
      style={{ width: "100%", height: "400px" }}
      mapStyle="mapbox://styles/mapbox/light-v9"
      accessToken={token}
      latitude={37.78}
      longitude={-122.41}
      zoom={11}
    />
  );
};

export default MapCoffe;
