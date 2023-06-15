import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { dataPhoto } from "../assets/data/dataPhoto";

const Menu = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [bigPoto, setBigPoto] = useState({});

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
  };
  useEffect(() => {
    getData();
  }, []);

  const handleFoto = (foto) => {
    setBigPoto(foto);
    setModal(true);
  };

  const handleCloseModal = () => setModal(!modal);

  return (
    <main className="page_menu_cafe">
      {modal ? (
        <section className="full_images" onClick={handleCloseModal}>
          <button>X</button>
          <img src={bigPoto} alt="Makanan" />
        </section>
      ) : null}
      <section className="title">
        <h1>{data.Nama}</h1>
      </section>
      <section className="top">
        <p>Menu</p>
        <a href={data.Menu} target="_blank" rel="noreferrer">
          Download Pdf
        </a>
      </section>
      <section className="bottom">
        <p>Makanan & Minuman</p>
        <div className="row">
          {data?.Food?.map((item, index) => (
            <img
              key={index}
              src={item.foto}
              alt="Makanan"
              onClick={() => handleFoto(item?.foto)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
