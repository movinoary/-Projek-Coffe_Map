import React from "react";
import Background from "../assets/icon/about.svg";
import Logo from "../assets/icon/logo.svg";

const About = () => {
  return (
    <section className="section_about" id="about">
      <div>
        <img src={Logo} alt="logo" />
        <img src={Background} alt="background_about" />
      </div>
      <div>
        <p>
          Dago Kopipedia adalah sebuah platform yang menyajikan informasi
          mengenai destinasi coffee shop di Kawasan Dago Kota Bandung
        </p>
      </div>
    </section>
  );
};

export default About;
