import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { dataPhoto } from "../assets/data/dataPhoto";
import axios from "axios";
import icon from "../assets/icon/kopi.svg";
import { useNavigate } from "react-router-dom";

export default function MapCoffe() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [dataPopup, setDataPopup] = useState({});
  const [input, setInput] = useState({ cafe: "" });
  const [popup, setPopUp] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: -6.875267587701671,
    longitude: 107.63194270949793,
    zoom: 13,
  });

  const getData = async () => {
    const response = await axios.get(
      "https://geoserver.mapid.io/layers_new/get_layer?api_key=6015daaa36324bb885749c34fe56fe13&layer_id=647c5f4dd99beff68421878e&project_id=64699c3ed2a8cc48b1a97aaf"
    );

    const res_data = response?.data;
    const bind_data = res_data.geojson.features.map((item) => {
      const data_poto = dataPhoto.find((d) => d?.key === item.key);

      return {
        ...item,
        data_poto,
      };
    });

    const body = {
      ...res_data,
      geojson: {
        ...res_data.geojson,
        features: bind_data,
      },
    };

    setData(body);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (data) => {
    // const body = data?.geojson?.features.find((d) => d.key === key);

    setDataPopup(data);
    setPopUp(true);
  };

  const handleClose = () => {
    setDataPopup(null);
    setPopUp(false);
  };

  const handleOnChange = (e) => {
    setInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    const find_data = data.geojson?.features.find(
      (d) => d.properties.name === input.cafe
    );

    setDataPopup(find_data);
    setPopUp(true);
  };

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle={"mapbox://styles/vinoarystio/clioob306008q01r191wgasf0"}
      mapboxApiAccessToken="pk.eyJ1Ijoidmlub2FyeXN0aW8iLCJhIjoiY2w2czRtNzYxMG1xbDNrbGo1N3k4a3NuciJ9.VHdXy-kV3UZLqcFF601K6A"
    >
      <section className="map_search">
        {/* <input type="text" placeholder="Coffe Shop..." /> */}
        <select onChange={handleOnChange} value={input.cafe} name="cafe">
          <option hidden>Daftar Coffe Shop</option>
          {data?.geojson?.features
            .filter((item) => item?.data_poto)
            .map((data, index) => {
              return (
                <option key={index} value={data.properties.name}>
                  {data.properties.name}
                </option>
              );
            })}
        </select>
        {input.cafe ? (
          <button onClick={() => handleSearch()}>Cari</button>
        ) : (
          <button disabled>Cari</button>
        )}
      </section>

      {popup && (
        <section className="map_popup">
          <button onClick={() => handleClose()}>x</button>
          <h1>{dataPopup?.data_poto?.Nama}</h1>
          <img
            src={dataPopup?.data_poto?.Tempat?.[0].foto}
            alt={dataPopup?.data_poto?.Nama}
          />
          <p>{dataPopup?.properties?.Alamat}</p>
          <p>{dataPopup?.properties?.["Jam Operasional"]}</p>
          <button onClick={() => navigate(`/coffe-shop/${dataPopup?.key}`)}>
            Info Lengkap
          </button>
        </section>
      )}

      {data?.geojson?.features
        .filter((item) => item?.data_poto)
        .map((data, index) => {
          return (
            <Marker
              key={index}
              longitude={data?.geometry?.coordinates?.[0]}
              latitude={data?.geometry?.coordinates?.[1]}
            >
              <div className="map_icon" onClick={() => handleClick(data)}>
                <p style={{ zIndex: `${index + 50}` }}>
                  {data?.properties?.name}
                </p>
                <div
                  className="icon"
                  style={{
                    zIndex: `${index - 50}`,
                    backgroundColor:
                      data?.key === dataPopup?.key ? "#786257" : "#f5e8d8",
                    border:
                      data?.key === dataPopup?.key
                        ? "1px solid #f5e8d8"
                        : "1px solid #786257",
                  }}
                >
                  <img src={icon} alt={data?.properties?.name} />
                </div>
              </div>
            </Marker>
          );
        })}
    </ReactMapGL>
  );
}
