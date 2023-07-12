import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/icon/logo.svg";
import Menu from "../assets/icon/menu.svg";

const Nav = () => {
  const [active, setActive] = useState(false);
  const [line, setLine] = useState(false);
  const mobile = window.screen.width;
  const path = window.location.pathname.slice(1, 11);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setLine(true);
    } else {
      setLine(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const menu = [
    {
      name: "Home",
      to: "/",
      path: "",
    },
    {
      name: "About",
      to: "/#about",
      path: "#about",
    },
    {
      name: "Dago Coffee Map",
      to: "/map",
      path: "map",
    },
    {
      name: "Pagi Ngopi",
      to: "/pagi-ngopi",
      path: "pagi-ngopi",
    },
  ];

  const handleNavigate = (data) => {
    if (data) {
      navigate.push(data.to);
    }
    setActive(false);
  };

  return (
    <nav
      className={mobile <= "576" ? "mobile_nav" : "component_nav"}
      style={{
        backgroundColor:
          mobile <= "576" && path === "pagi-ngopi"
            ? "#eed2c4"
            : path === "map"
            ? "#ffffff"
            : "#f5e8d8",
      }}
    >
      <div
        className="top"
        style={{
          borderBottom:
            mobile <= "576" && line
              ? "2px solid #786257"
              : mobile <= "576" && path === "map"
              ? "4px solid #786257"
              : "none",
        }}
      >
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
        {mobile <= "576" && (
          <img src={Menu} alt="Logo" onClick={() => setActive(!active)} />
        )}
      </div>
      {active && (
        <div className="bottom_close" onClick={() => setActive(!active)} />
      )}
      <div className={active ? "bottom_active" : "bottom"}>
        {menu.map((data, index) =>
          data.name === "About" ? (
            <a
              className="menu"
              href={data.to}
              onClick={() => handleNavigate()}
              key={index}
              style={{
                color: path === data.path ? "#ff3333" : "#000000",
                fontWeight: path === data.path ? "600" : "400",
              }}
            >
              {data.name}
            </a>
          ) : (
            <p
              className="menu"
              // to={data.to}
              onClick={() => {
                handleNavigate(data);
              }}
              key={index}
              style={{
                color: path === data.path ? "#ff3333" : "#000000",
                fontWeight: path === data.path ? "600" : "400",
              }}
            >
              {data.name}
            </p>
          )
        )}
      </div>
    </nav>
  );
};

export default Nav;
