import React from 'react';
import './App.css';
// import Hero
import Navbar from "./Components/Navbar";
import HeroArea from './Components/HeroArea';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import TopCategory from "./Components/TopCategory";
import ShowProduct from "./Components/ShowProduct";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <HeroArea></HeroArea>
      <TopCategory />
      <ShowProduct />
      <Products />
      <Footer />
    </div>
  )
}

export default App;