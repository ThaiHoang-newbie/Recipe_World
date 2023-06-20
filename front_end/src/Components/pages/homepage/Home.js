import React from "react";
import ShowProduct from "./UI/ShowProduct";
import Products from "./UI/receiver/Products";
import "@fortawesome/fontawesome-free";
const Home = () => {

  return (
    <div className="styleHome">
      <ShowProduct />
      <Products />
    </div>
  );
};

export default Home;
