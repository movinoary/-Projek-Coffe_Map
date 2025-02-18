import * as React from "react";
import Map from "react-map-gl/mapbox";
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
// import "mapbox-gl/dist/mapbox-gl.css";

function ViewMap() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2x2M2JhMXlmMHBlaTJsb3FsM3hnNzBvOCJ9.9t-e--GUark8BwfBuRDchg"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default ViewMap;
