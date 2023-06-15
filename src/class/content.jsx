import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../assets/images/about.png";
import Background_Phone from "../assets/images/about_phone.png";
import Logo from "../assets/icon/dago.svg";

const Content = () => {
  const mobile = window.screen.width;

  const navigate = useNavigate();

  return (
    <section className="section_ngopi">
      {mobile <= "576" && (
        <img className="img_phone" src={Logo} alt="Logo Dago" />
      )}
      <div className="background">
        <img
          src={mobile <= "576" ? Background_Phone : Background}
          alt="pagi ngopi di dago"
        />
      </div>
      <h1>Cari tempat ngopi pagi di Kawasan Dago? Yuk, temukan di sini!</h1>
      <button onClick={() => navigate("/pagi-ngopi")}>Pagi Ngopi</button>
    </section>
  );
};

export default Content;
