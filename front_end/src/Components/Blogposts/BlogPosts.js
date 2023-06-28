import React from "react";

export default function BlogPosts() {
  return (
    <div>
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb2.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}
      {/* ##### Blog Area Start ##### */}
      <div className="blog-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts-area">
                {/* Single Blog Area */}
                <div className="single-blog-area mb-80">
                  {/* Thumbnail */}
                  <div className="blog-thumbnail">
                    <img src="img/blog-img/1.jpg" alt="" />
                    {/* Post Date */}
                    <div className="post-date">
                      <a href="#">
                        <span>05</span>April <br /> 2018
                      </a>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="blog-content">
                    <a href="#" className="post-title">
                      How to find amazing restaurants in your city
                    </a>
                    <div className="meta-data">
                      by <a href="#">Maria Williams</a> in{" "}
                      <a href="#">Restaurants</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                      ac pellentesque tortor. Aenean congue sed metus in
                      iaculis. Cras a tortor enim. Phasellus posuere vestibulum
                      ipsum, eget lobortis purus. Orci varius natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.{" "}
                    </p>
                    <a href="#" className="btn delicious-btn mt-30">
                      Read More
                    </a>
                  </div>
                </div>
                {/* Single Blog Area */}
                <div className="single-blog-area mb-80">
                  {/* Thumbnail */}
                  <div className="blog-thumbnail">
                    <img src="img/blog-img/2.jpg" alt="" />
                    {/* Post Date */}
                    <div className="post-date">
                      <a href="#">
                        <span>05</span>April <br /> 2018
                      </a>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="blog-content">
                    <a href="#" className="post-title">
                      10 tips to live a healty life
                    </a>
                    <div className="meta-data">
                      by <a href="#">Maria Williams</a> in{" "}
                      <a href="#">Restaurants</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                      ac pellentesque tortor. Aenean congue sed metus in
                      iaculis. Cras a tortor enim. Phasellus posuere vestibulum
                      ipsum, eget lobortis purus. Orci varius natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.{" "}
                    </p>
                    <a href="#" className="btn delicious-btn mt-30">
                      Read More
                    </a>
                  </div>
                </div>
                {/* Single Blog Area */}
                <div className="single-blog-area mb-80">
                  {/* Thumbnail */}
                  <div className="blog-thumbnail">
                    <img src="img/blog-img/3.jpg" alt="" />
                    {/* Post Date */}
                    <div className="post-date">
                      <a href="#">
                        <span>05</span>April <br /> 2018
                      </a>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="blog-content">
                    <a href="#" className="post-title">
                      5 Tips on how to cook the best hamburger
                    </a>
                    <div className="meta-data">
                      by <a href="#">Maria Williams</a> in{" "}
                      <a href="#">Restaurants</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                      ac pellentesque tortor. Aenean congue sed metus in
                      iaculis. Cras a tortor enim. Phasellus posuere vestibulum
                      ipsum, eget lobortis purus. Orci varius natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.{" "}
                    </p>
                    <a href="#" className="btn delicious-btn mt-30">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01.
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02.
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03.
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-12 col-lg-4">
              <div className="blog-sidebar-area">
                {/* Widget */}
                <div className="single-widget mb-80">
                  <h6>Archive</h6>
                  <ul className="list">
                    <li>
                      <a href="#">March 2018</a>
                    </li>
                    <li>
                      <a href="#">February 2018</a>
                    </li>
                    <li>
                      <a href="#">January 2018</a>
                    </li>
                    <li>
                      <a href="#">December 2017</a>
                    </li>
                    <li>
                      <a href="#">November 2017</a>
                    </li>
                  </ul>
                </div>
                {/* Widget */}
                <div className="single-widget mb-80">
                  <h6>Categories</h6>
                  <ul className="list">
                    <li>
                      <a href="#">Restaurants</a>
                    </li>
                    <li>
                      <a href="#">Food &amp; Drinks</a>
                    </li>
                    <li>
                      <a href="#">Vegans</a>
                    </li>
                    <li>
                      <a href="#">Events &amp; Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Uncategorized</a>
                    </li>
                  </ul>
                </div>
                {/* Widget */}
                <div className="single-widget mb-80">
                  <h6>Newsletter</h6>
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
                {/* Widget */}
                <div className="single-widget mb-80">
                  <div className="quote-area text-center">
                    <span>"</span>
                    <h4>
                      Nothing is better than going home to family and eating
                      good food and relaxing
                    </h4>
                    <p>John Smith</p>
                    <div className="date-comments d-flex justify-content-between">
                      <div className="date">January 04, 2018</div>
                      <div className="comments">2 Comments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
