import React from 'react';
// import logo from './img/core-img/logo.png';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Assets/style.css';

function ShowProduct(){
    return(
        <div>
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://danviet.mediacdn.vn/upload/3-2012/images/2012-07-05/1434700205-05-07anh-mon-an-ngonban-dong-hanh-cua-beo-phi_1.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Sushi Easy Receipy</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://afamilycdn.com/k:OW1Sm9t0ccccccccccccpPWM7cRCUp/Image/2013/06/do-an-nhanh-fac56/8-loi-khuyen-cho-nhung-nguoi-thich-an-do-an-nhanh.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Homemade Burger</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://haisangiobien.com/wp-content/uploads/2022/05/su-cuon-hut-cua-mon-tom-su-sot-bo-toi.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Vegan Smoothie</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-3.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Calabasa soup</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://daylambanh.edu.vn/wp-content/uploads/2019/12/pho-mai-que-600x400.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Homemade Breakfast</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2022_07_27/2707banhxeo.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Healthy Fruit Desert</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
        </div>
    )
}
export default ShowProduct;