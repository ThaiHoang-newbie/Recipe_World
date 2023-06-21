import React, { Component } from "react";
import "../../../../Assets/style.css";
import UserIn from "./UserIn";
class Header extends Component {
  componentDidMount() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
  }
  render() {
    return (
      <header className="header-area">
        <div className="top-header-area">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              <div className="col-12 col-sm-4">
                <p className="text-success pt-2">Welcome to Receipe World</p>
              </div>
              <div className="col-12 col-sm-4">
                <div className="top-social-info text-right">
                  <a href="#">
                    <i className="fa fa-pinterest"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance"/>
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin"/>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <UserIn />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
