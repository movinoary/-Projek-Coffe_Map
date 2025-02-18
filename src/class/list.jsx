import React, { useEffect, useState } from "react";
import { dataPhoto } from "../assets/data/dataPhoto";
import Card from "../components/card";
import LoadingBar from "react-top-loading-bar";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(1);

  const width = window.innerWidth;
  const postsPerPage = width >= 1650 ? 8 : 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataPhoto.slice(firstPostIndex, lastPostIndex);

  const totalPosts = dataPhoto.length;
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentPage === pages.length) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }, 5000);
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => {
      if (progress === 4) {
        setProgress(1);
      } else {
        setProgress(progress + 1);
      }
    }, 1250);
  }, [currentPage, progress]);

  console.log(progress);

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
                  images={data?.Tempat?.[0]?.foto}
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
        <div className="loader">
          <div
            className={`${
              progress === 1
                ? "satu"
                : progress === 2
                ? "dua"
                : progress === 3
                ? "tiga"
                : progress === 4
                ? "empat"
                : null
            }`}
          />
        </div>
        {/* <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
          <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
          <button onClick={() => setProgress(100)}>Complete</button>
        </div> */}
      </div>
    </section>
  );
};

export default List;
