import React from "react";
import Coffe from "../assets/coffe.png";
import Background from "../assets/about.svg";
import Logo from "../assets/upi.svg";

const Home = () => {
  return (
    <>
      <section className="section_header">
        <h1>Temukan Destinasi Coffee Shop Kawasan Dago </h1>
        <button>Di Sini!</button>
      </section>

      <section className="section_list">
        <h1>Temukan Destinasi Coffee Shop Kawasan Dago </h1>
        <div className="list_content">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <section className="section_ngopi">
        <h1>Cari tempat ngopi pagi di Kawasan Dago? Yuk, temukan di sini!</h1>
        <button>Pagi Ngopi</button>
      </section>

      <section className="section_about">
        <div>
          <h1>Logo</h1>
          <img src={Background} alt="background_about" />
        </div>
        <div>
          <p>
            "nama website" adalah sebuah platform yang menyajikan informasi
            mengenai destinasi coffee shop di Kawasan Dago Kota Bandung
          </p>
        </div>
      </section>

      <section className="section_footer">
        <div className="left">
          <h1>Logo</h1>
          <img src={Logo} alt="logo" />
        </div>
        <div className="right">
          <h2>Qisti Fadilah</h2>
          <p>Manajemen Industri Katering UPI 2019</p>
          <p>© 2023 nama web</p>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Home;

const Card = () => {
  return (
    <figure className="component_card_list">
      <h2>title</h2>
      <div>
        <img src={Coffe} alt="coffe" />
      </div>
    </figure>
  );
};
