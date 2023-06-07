import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { dataPhoto } from "../assets/data/dataPhoto";

const Detail = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  const [bigPoto, setBigPoto] = useState(data?.Tempat?.[0]?.foto);

  const getData = async () => {
    const response = await axios.get(
      "https://geoserver.mapid.io/layers_new/get_layer?api_key=6015daaa36324bb885749c34fe56fe13&layer_id=647c5f4dd99beff68421878e&project_id=64699c3ed2a8cc48b1a97aaf"
    );

    const res_data = response?.data;

    const find_data_api = res_data?.geojson?.features.find(
      (d) => d?.key === key
    );
    const find_data_poto = dataPhoto.find((d) => d?.key === key);

    const body = {
      ...find_data_api,
      ...find_data_poto,
    };
    setData(body);
    setBigPoto(data?.Tempat?.[0]?.foto);
  };
  useEffect(() => {
    getData("test");
  }, []);

  return (
    <main className="page_detail_cafe">
      <section className="left">
        <div className="big_photo">
          <img
            src={bigPoto !== undefined ? bigPoto : data?.Tempat?.[0]?.foto}
            // src={bigPoto}
            alt={data.Nama}
            width={500}
          />
        </div>
        <div className="list_poto">
          {data?.Tempat?.map((item, index) => (
            <img
              key={index}
              src={item?.foto}
              alt={data?.Nama}
              onClick={() => setBigPoto(item?.foto)}
            />
          ))}
        </div>
      </section>
      <section className="right">
        <h1 className="title">{data?.Nama}</h1>
        <div className="content">
          <div>
            <p>Operasional </p>
            <p>: {data?.properties?.["Jam Operasional"]}</p>
          </div>
          <div>
            <p>Alamat </p>
            <p>: {data?.properties?.["Alamat"]}</p>
          </div>
          <div>
            <p>Social Media </p>
            <p>: {data?.properties?.["Social Media"]}</p>
          </div>
          <div>
            <p>Kontak </p>
            <p>: {data?.properties?.["Contact Person"]}</p>
          </div>
        </div>
        <button>Menu</button>
      </section>
    </main>
  );
};

export default Detail;
