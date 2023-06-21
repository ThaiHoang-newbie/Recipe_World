import React from "react";
import ShowProduct from "./UI/ShowProduct";
import Products from "./UI/receiver/Products";
import Navbar from "./parts/Navbar";
import HeroArea from "./parts/HeroArea";
import TopCategory from "./parts/TopCategory";
import Footer from "./parts/Footer";
import Header from "./parts/Header";

import "@fortawesome/fontawesome-free";
const Home = () => {
  return (
    <div className="styleHome">
      <Header />
      <Navbar></Navbar>
      <HeroArea></HeroArea>
      <TopCategory />
      <ShowProduct />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
