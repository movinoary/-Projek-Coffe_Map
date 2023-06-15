import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../assets/images/home.png";
import Background_Phone from "../assets/images/home_phone.png";

const Header = () => {
  const mobile = window.screen.width;
  const navigate = useNavigate();

  return (
    <section className="section_header">
      <div className="background">
        <img
          src={mobile <= "576" ? Background_Phone : Background}
          alt="Home Dago Kopipedia"
        />
      </div>
      <div className="title">
        <h1>Temukan Destinasi Coffee Shop Kawasan Dago </h1>
        <button onClick={() => navigate("/map")}>Di Sini!</button>
      </div>
    </section>
  );
};

export default Header;
