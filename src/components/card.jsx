import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, images, path }) => {
  const navigate = useNavigate();

  return (
    <figure className="component_card_list" onClick={() => navigate(path)}>
      <h2>{title}</h2>
      <div>
        <img src={images} alt="coffe" />
      </div>
    </figure>
  );
};

export default Card;
