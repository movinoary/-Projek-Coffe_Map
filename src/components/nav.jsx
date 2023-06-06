import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="component_nav">
      <div className="top">
        <h1>Logo</h1>
      </div>
      <div className="bottom">
        <Link className="menu" to="/">
          Home
        </Link>
        <a className="menu" href="/#about">
          About
        </a>
        <a className="menu" href="/#coffeShop">
          Dago Coffe Map
        </a>
        <Link className="menu" to="/pagi-ngopi">
          Pagi Ngopi
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
