import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="component_nav">
      <div className="top">
        <h1>Logo</h1>
      </div>
      <div className="bottom">
        <Link className="menu">Home</Link>
        <Link className="menu">About</Link>
        <Link className="menu">Dago Coffe Map</Link>
        <Link className="menu">Pagi Ngopi</Link>
      </div>
    </nav>
  );
};

export default Nav;
