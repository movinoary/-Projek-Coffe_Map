import React from "react";
import Upi from "../assets/icon/upi.svg";
import Logo from "../assets/icon/logo.svg";

const Footer = () => {
  return (
    <section className="section_footer">
      <div className="left">
        <img src={Logo} alt="logo" />
        <img src={Upi} alt="Upi" />
      </div>
      <div className="right">
        <h2>Qisti Fadilah</h2>
        <p>Manajemen Industri Katering UPI 2019</p>
        <p>© 2023 Dago Kopipedia</p>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
