import React from 'react';
// import logo from './img/core-img/logo.png';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Assets/style.css';

function TopCategory(){
    return(
        <div>
            <section className="top-catagory-area section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* Top Catagory Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg2.jpg" alt="" />
                {/* Content */}
                <div className="top-cta-content">
                  <h3>Strawberry Cake</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                </div>
              </div>
            </div>
            {/* Top Catagory Area */}
            <div className="col-12 col-lg-6">
              <div className="single-top-catagory">
                <img src="http://127.0.0.1:5500/Recipe_World/delicious-master/img/bg-img/bg3.jpg" alt="" />
                {/* Content */}
                <div className="top-cta-content">
                  <h3>Chinesse Noodles</h3>
                  <h6>Simple &amp; Delicios</h6>
                  <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
export default TopCategory;