import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header-area">
        {/* Top Header Area */}
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              {/* Breaking News */}
              <div className="col-12 col-sm-4">
                <p className="text-success pt-2">Welcome to Receipe World</p>
              </div>
              {/* Top Social Info */}
              <div className="col-12 col-sm-4">
                <div className="top-social-info text-right">
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
              </div>
              <div className="col-12 col-sm-4">
                <div className="text-right">
                  <button className="btn bg-success-btn">Join Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
