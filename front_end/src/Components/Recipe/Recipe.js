import React, { useEffect, useState } from "react";
import "../../Assets/style.css";
import Header from "../pages/homepage/parts/Header";
import Footer from "../pages/homepage/parts/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

export default function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [postImages, setPostImages] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/get-post/${id}`)
      .then((res) => {
        const data = res.data;
        setRecipe(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(recipe);

  return (
    <>
      <Header />
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: `url(${recipe && recipe.thumbnail})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>{recipe && recipe.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      <div className="receipe-post-area section-padding-80">
        {/* Receipe Post Search */}
        {/* Receipe Slider */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="receipe-slider owl-carousel">
                <img src="img/bg-img/bg5.jpg" alt="" />
                <img src="img/bg-img/bg5.jpg" alt="" />
                <img src="img/bg-img/bg5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Receipe Content Area */}
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="receipe-headline my-5">
                  <h5>Description</h5>
                  {recipe && recipe.content}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="receipe-ratings text-right my-5">
                  <div className="ratings">
                    <i className="fa-solid fa-star" aria-hidden="true" />
                    <i className="fa-solid fa-star" aria-hidden="true" />
                    <i className="fa-solid fa-star" aria-hidden="true" />
                    <i className="fa-solid fa-star" aria-hidden="true" />
                    <i className="fa-solid fa-star-o" aria-hidden="true" />
                  </div>
                  <a href="#" className="btn delicious-btn">
                    {recipe && `$${recipe.price}`}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="receipe-content-area">
        <div class="container">
            <Comments postId={id}/>
        </div>
      </div>

      {/* ##### Follow Us Instagram Area Start ##### */}
      <div className="follow-us-instagram">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Follow Us Instragram</h5>
            </div>
          </div>
        </div>
        {/* Instagram Feeds */}
        <div className="insta-feeds d-flex flex-wrap">
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta1.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta2.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta3.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta4.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta5.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta6.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Single Insta Feeds */}
          <div className="single-insta-feeds">
            <img src="img/bg-img/insta7.jpg" alt="" />
            {/* Icon */}
            <div className="insta-icon">
              <a href="#">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
