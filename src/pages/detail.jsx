import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { dataPhoto } from "../assets/data/dataPhoto";

const Detail = () => {
  const { key } = useParams();
  const path = window.location.pathname.slice(1, 11);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [bigPoto, setBigPoto] = useState(data?.Tempat?.[0]?.foto);
  const [fullPoto, setFullPoto] = useState("");

  const getData = async () => {
    const response = await axios.get(
      "https://geoserver.mapid.io/layers_new/get_layer?api_key=6015daaa36324bb885749c34fe56fe13&layer_id=647c5f4dd99beff68421878e&project_id=64699c3ed2a8cc48b1a97aaf"
    );

    const res_data = response?.data;
    // console.log("res_data =", res_data);
    const find_data_poto = dataPhoto.find((d) => d?.key === key);
    const find_data_api = res_data?.features.find(
      (d) => d?.properties?.Nama === find_data_poto.Nama
    );

    // console.log("find_data_api =", res_data);
    // console.log("find_data_poto =", find_data_poto.Nama);

    const body = {
      ...find_data_api,
      ...find_data_poto,
    };
    setData(body);
    setBigPoto(data?.Tempat?.[0]?.foto);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleFoto = (foto) => {
    setFullPoto(foto);
    setModal(true);
  };

  console.log(data);

  const handleCloseModal = () => setModal(!modal);
  return (
    <>
      {modal ? (
        <section className="page_full_images" onClick={handleCloseModal}>
          <button>X</button>
          <img src={fullPoto} alt="Makanan" />
        </section>
      ) : null}
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
          {path === "detail/pag" && (
            <div className="card_spesial">
              <h1>Pagi ngopi</h1>
              <h2>{data?.Pagi_Ngopi || " "}</h2>
            </div>
          )}
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
          <div className="row_button">
            <a href={data.Menu} target="_blank" rel="noreferrer">
              Menu
            </a>
            <a
              href={data?.properties?.["Link Review Google"]}
              target="_blank"
              rel="noreferrer"
            >
              Review
            </a>
          </div>
          <div className="menu">
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
          </div>
        </section>
      </main>
    </>
  );
};

export default Detail;
