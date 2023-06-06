import React from "react";
import Background from "../assets/icon/about.svg";

const About = () => {
  return (
    <section className="section_about" id="about">
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
  );
};

export default About;
