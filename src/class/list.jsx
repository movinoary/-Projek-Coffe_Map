import React, { useState } from "react";
import { dataPhoto } from "../assets/data/dataPhoto";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataPhoto.slice(firstPostIndex, lastPostIndex);

  const totalPosts = dataPhoto.length;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const addPage = (number) => setCurrentPage(number);

  return (
    <section className="section_list" id="coffeShop">
      <h1>Profile Coffee Shop Dago</h1>
      <div className="list_content">
        <div className="content_row">
          {currentPosts
            // .filter((item) => item?.Tempat?.foto_1)
            .map((data, index) => {
              return (
                <Card
                  path={`/coffe-shop/${data.key}`}
                  key={index}
                  title={data.Nama}
                  images={data?.Tempat?.[0]}
                />
              );
            })}
        </div>
        <div className="content_pagination">
          {pages.map((number, index) => (
            <button
              key={index}
              onClick={() => addPage(number)}
              className={
                currentPage === number
                  ? "pagination_active"
                  : "pagination_non_active"
              }
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;

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
