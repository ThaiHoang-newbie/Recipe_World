import React, { Component } from "react";
import Search from "../Header/Search";
import Header from "../Header/Header";
import ShowProduct from "../PostPlace/ShowProduct";

class Content extends Component {
  render() {
    return (
      <div>
        {/* <div id="preloader">
          <i className="circle-preloader" />
          <img src="img/core-img/salad.png" alt="" />
        </div> */}
        <Search />
        {/* ##### Header Area Start ##### */}
        <Header />
        {/* ##### Header Area End ##### */}
        {/* ##### Hero Area Start ##### */}
        <section className="hero-area">
          <div className="hero-slides owl-carousel">
            {/* Single Hero Slide */}
            <div
              className="single-hero-slide bg-img"
              style={{ backgroundImage: "url(img/bg-img/bg1.jpg)" }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div
                      className="hero-slides-content"
                      data-animation="fadeInUp"
                      data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">
                        Delicios Homemade Burger
                      </h2>
                      <p data-animation="fadeInUp" data-delay="700ms">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tristique nisl vitae luctus sollicitudin. Fusce
                        consectetur sem eget dui tristique, ac posuere arcu
                        varius.
                      </p>
                      <a
                        href="#"
                        className="btn delicious-btn"
                        data-animation="fadeInUp"
                        data-delay="1000ms">
                        See Receipe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Hero Slide */}
            <div
              className="single-hero-slide bg-img"
              style={{ backgroundImage: "url(img/bg-img/bg6.jpg)" }}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div
                      className="hero-slides-content"
                      data-animation="fadeInUp"
                      data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">
                        Delicios Homemade Burger
                      </h2>
                      <p data-animation="fadeInUp" data-delay="700ms">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tristique nisl vitae luctus sollicitudin. Fusce
                        consectetur sem eget dui tristique, ac posuere arcu
                        varius.
                      </p>
                      <a
                        href="#"
                        className="btn delicious-btn"
                        data-animation="fadeInUp"
                        data-delay="1000ms">
                        See Receipe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Hero Slide */}
            <div
              className="single-hero-slide bg-img"
              style={{ backgroundImage: "url(img/bg-img/bg7.jpg)" }}>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div
                      className="hero-slides-content"
                      data-animation="fadeInUp"
                      data-delay="100ms">
                      <h2 data-animation="fadeInUp" data-delay="300ms">
                        Delicios Homemade Burger
                      </h2>
                      <p data-animation="fadeInUp" data-delay="700ms">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tristique nisl vitae luctus sollicitudin. Fusce
                        consectetur sem eget dui tristique, ac posuere arcu
                        varius.
                      </p>
                      <a
                        href="#"
                        className="btn delicious-btn"
                        data-animation="fadeInUp"
                        data-delay="1000ms">
                        See Receipe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Hero Area End ##### */}
        {/* ##### Top Catagory Area Start ##### */}
        <section className="top-catagory-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Top Catagory Area */}
              <div className="col-12 col-lg-6">
                <div className="single-top-catagory">
                  <img src="img/bg-img/bg2.jpg" alt="" />
                  {/* Content */}
                  <div className="top-cta-content">
                    <h3>Strawberry Cake</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <a href="receipe-post.html" className="btn delicious-btn">
                      See Full Receipe
                    </a>
                  </div>
                </div>
              </div>
              {/* Top Catagory Area */}
              <div className="col-12 col-lg-6">
                <div className="single-top-catagory">
                  <img src="img/bg-img/bg3.jpg" alt="" />
                  {/* Content */}
                  <div className="top-cta-content">
                    <h3>Chinesse Noodles</h3>
                    <h6>Simple &amp; Delicios</h6>
                    <a href="receipe-post.html" className="btn delicious-btn">
                      See Full Receipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Top Catagory Area End ##### */}

        {/* ##### Best Receipe Area Start ##### */}
        <ShowProduct/>
        {/* ##### Best Receipe Area End ##### */}

        {/* ##### CTA Area Start ##### */}
        <section
          className="cta-area bg-img bg-overlay"
          style={{ backgroundImage: "url(img/bg-img/bg4.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                {/* Cta Content */}
                <div className="cta-content text-center">
                  <h2>Gluten Free Receipies</h2>
                  <p>
                    Fusce nec ante vitae lacus aliquet vulputate. Donec
                    scelerisque accumsan molestie. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Cras sed accumsan neque. Ut vulputate, lectus vel aliquam
                    congue, risus leo elementum nibh
                  </p>
                  <a href="#" className="btn delicious-btn">
                    Discover all the receipies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### CTA Area End ##### */}
        {/* ##### Small Receipe Area Start ##### */}
        <section className="small-receipe-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr1.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Homemade italian pasta</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr2.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Baked Bread</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr3.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Scalops on salt</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr4.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Fruits on plate</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr5.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Macaroons</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr6.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Chocolate tart</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr7.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Berry Desert</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr8.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Zucchini Grilled on peper</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
              {/* Small Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-small-receipe-area d-flex">
                  {/* Receipe Thumb */}
                  <div className="receipe-thumb">
                    <img src="img/bg-img/sr9.jpg" alt="" />
                  </div>
                  {/* Receipe Content */}
                  <div className="receipe-content">
                    <span>January 04, 2018</span>
                    <a href="receipe-post.html">
                      <h5>Chicken Salad</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                    <p>2 Comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Small Receipe Area End ##### */}
        {/* ##### Quote Subscribe Area Start ##### */}
        <section className="quote-subscribe-adds">
          <div className="container">
            <div className="row align-items-end">
              {/* Quote */}
              <div className="col-12 col-lg-4">
                <div className="quote-area text-center">
                  <span>"</span>
                  <h4>
                    Nothing is better than going home to family and eating good
                    food and relaxing
                  </h4>
                  <p>John Smith</p>
                  <div className="date-comments d-flex justify-content-between">
                    <div className="date">January 04, 2018</div>
                    <div className="comments">2 Comments</div>
                  </div>
                </div>
              </div>
              {/* Newsletter */}
              <div className="col-12 col-lg-4">
                <div className="newsletter-area">
                  <h4>Subscribe to our newsletter</h4>
                  {/* Form */}
                  <div
                    className="newsletter-form bg-img bg-overlay"
                    style={{ backgroundImage: "url(img/bg-img/bg1.jpg)" }}
                  >
                    <form action="#" method="post">
                      <input
                        type="email"
                        name="email"
                        placeholder="Subscribe to newsletter"
                      />
                      <button type="submit" className="btn delicious-btn w-100">
                        Subscribe
                      </button>
                    </form>
                    <p>
                      Fusce nec ante vitae lacus aliquet vulputate. Donec
                      sceleri sque accumsan molestie. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere
                      cubilia.
                    </p>
                  </div>
                </div>
              </div>
              {/* Adds */}
              <div className="col-12 col-lg-4">
                <div className="delicious-add">
                  <img src="img/bg-img/add.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Quote Subscribe Area End ##### */}
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
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta2.jpg" alt="" />
              {/* Icon */}
              <div className="insta-icon">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
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
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            {/* Single Insta Feeds */}
            <div className="single-insta-feeds">
              <img src="img/bg-img/insta5.jpg" alt="" />
              {/* Icon */}
              <div className="insta-icon">
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
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
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Follow Us Instagram Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <footer className="footer-area">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                {/* Footer Social Info */}
                <div className="footer-social-info text-right">
                  <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
                {/* Footer Logo */}
                <div className="footer-logo">
                  <a href="index.html">
                    <img src="img/core-img/logo.png" alt="" />
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Content;
