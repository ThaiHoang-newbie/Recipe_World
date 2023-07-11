import React from 'react';
import "../../../../Assets/style.css";

import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <footer className="footer-area">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                        {/* Footer Social Info */}
                        <div className="footer-social-info text-right">
                            <a href="#"><i className="fa-brands fa-pinterest" /></a>
                            <a href="#"><i className="fa-brands fa-facebook" /></a>
                            <a href="#"><i className="fa-brands fa-twitter" /></a>
                            <a href="#"><i className="fa-brands fa-dribbble" /></a>
                            <a href="#"><i className="fa-brands fa-behance" /></a>
                            <a href="#"><i className="fa-brands fa-linkedin" /></a>
                        </div>
                        <div className="footer-logo">
                            <a href="index.html"><img src="../img/core-img/logo.png" alt="" /></a>
                        </div>
                        <p>
                            Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;  