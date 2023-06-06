import React from "react";
import Logo from "../assets/icon/upi.svg";

const Footer = () => {
  return (
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
  );
};

export default Footer;
