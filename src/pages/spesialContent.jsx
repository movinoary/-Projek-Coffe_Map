import React from "react";
import { dataPhoto } from "../assets/data/dataPhoto";
import Card from "../components/card";

const SpesialContent = () => {
  const Data = dataPhoto.filter((item) => item?.Pagi_Ngopi);

  return (
    <section className="page_spesial">
      <h1 className="title">Ngopi Pagi di Dago</h1>
      <div className="section_spesial">
        <div className="row">
          {Data.map((data, index) => (
            <Card
              path={`/detail/pagi-ngopi/${data.key}`}
              key={index}
              title={data.Nama}
              images={data?.Tempat?.[0]?.foto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpesialContent;
