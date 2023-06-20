import React from 'react';
// import logo from './img/core-img/logo.png';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Assets/style.css';

function Navbar() {
  return (
    <div className="delicious-main-menu">
      <div className="classy-nav-container breakpoint-off light left">
        <div className="container">
          <nav className="classy-navbar justify-content-between" id="deliciousNav">
          <a className="nav-brand" href="index.html"><img src="http://127.0.0.1:5500/Recipe_World/delicious-master/img/core-img/logo.png" alt="" /></a>
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span></span>
                <span></span> 
                <span></span>
              </span>
            </div>

            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>

              <div className="classynav">
                <ul>
                  <li className="active"><a href="index.html">HOME</a></li>
                  <li className="cn-dropdown-item has-down"><a href="#">PAGE</a>
                    <ul className="dropdown">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="blog-post.html">Blog Post</a></li>
                      <li><a href="receipe-post.html">Recipe Post</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="elements.html">Elements</a></li>
                      <li className="has-down"><a href="#">Dropdown</a>
                        <ul className="dropdown">
                          <li><a href="index.html">Home</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="blog-post.html">Blog Post</a></li>
                          <li><a href="receipe-post.html">Recipe Post</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="elements.html">Elements</a></li>
                          <li className="has-down"><a href="#">Dropdown</a>
                            <ul className="dropdown">
                              <li><a href="index.html">Home</a></li>
                              <li><a href="about.html">About Us</a></li>
                              <li><a href="blog-post.html">Blog Post</a></li>
                              <li><a href="receipe-post.html">Recipe Post</a></li>
                              <li><a href="contact.html">Contact</a></li>
                              <li><a href="elements.html">Elements</a></li>
                            </ul>
                            <span className="dd-trigger"></span>
                          </li>
                        </ul>
                        <span className="dd-trigger"></span>
                      </li>
                    </ul>
                    <span className="dd-trigger"></span>
                  </li>
                  <li  className="megamenu-item"><a href="#">MEGA MENU</a>
                    <div className="megamenu">
                      <ul className="single-mega cn-col-4">
                        <li className="title">Category</li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="receipe-post.html">Recipe Post</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="elements.html">Elements</a></li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Category</li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="receipe-post.html">Recipe Post</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="elements.html">Elements</a></li>
                      </ul>
                      <ul className="single-mega cn-col-4">
                        <li className="title">Category</li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="receipe-post.html">Recipe Post</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="elements.html">Elements</a></li>
                      </ul>
                      <div className="single-mega cn-col-4">
                        <div className="receipe-slider owl-carousel owl-loaded owl-drag">
                          <img src="http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <span className="dd-trigger"></span>
                  </li>
                  <li><a href="receipe-post.html">RECIPES</a></li>
                  <li><a href="receipe-post.html">4 VEGANS</a></li>
                  <li ><a href="contact.html">CONTACT</a></li>
                </ul>

                <div className="search-btn">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
