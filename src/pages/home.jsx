import React from "react";

import About from "../class/about";
import Footer from "../class/footer";
import Content from "../class/content";
import Header from "../class/header";
import List from "../class/list";

const Home = () => {
  return (
    <>
      <Header />
      <List />
      <Content />
      <About />
      <Footer />
    </>
  );
};

export default Home;
