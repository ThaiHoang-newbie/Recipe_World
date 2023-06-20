import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../Assets/style.css';

function Footer(){
    return(
        <footer className="footer-area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
              {/* Footer Social Info */}
              <div className="footer-social-info text-right">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-behance" aria-hidden="true" /></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
              </div>
              {/* Footer Logo */}
              <div className="footer-logo">
                <a href="index.html"><img src="http://127.0.0.1:5500/Recipe_World/delicious-master/img/core-img/logo.png" alt="" /></a>
              </div>
              {/* Copywrite */}
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright ©2023 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;