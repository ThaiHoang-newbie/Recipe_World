
import React from 'react';
import './App.css';

import Navbar from "./Components/HomePage/Navbar";
import HeroArea from './Components/HomePage/HeroArea';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import TopCategory from "./Components/HomePage/TopCategory";
import ShowProduct from "./Components/HomePage/ShowProduct";
import Products from "./Components/HomePage/Products";
import Footer from "./Components/HomePage/Footer";
import Posting_form from './Components/Posting/Posting_form';
import Header from './Components/HomePage/Header';
import UserInfor from './Components/UserInfor/UserInfor';
import EditUserInfor from './Components/UserInfor/EditUserInfor';

function App() {
  return (
    <div className="container-fluid">
      {/* <Header></Header>
      <Navbar></Navbar>
      <HeroArea></HeroArea>
      <TopCategory />
      <ShowProduct />
      <Products />
      <Footer /> */}
      {/* <Posting_form></Posting_form> */}

      {/* <UserInfor></UserInfor> */}
      <EditUserInfor></EditUserInfor>

      {/* <SearchBar></SearchBar> */}
      {/* <Search></Search> */}
    </div>
  )
}
export default App;