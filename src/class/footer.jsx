import React from "react";
import Logo from "../assets/icon/logo.svg";

const Footer = () => {
  return (
    <section className="section_footer">
      <div className="left">
        <img src={Logo} alt="logo" />
      </div>
      <div className="right">
        <p>© 2023 Dago Kopipedia</p>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
