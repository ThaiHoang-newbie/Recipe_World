import React from "react";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            <img
              src="../assets/images/logos/dark-logo.svg"
              width={180}
              alt=""
            />
          </Link>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-layout-dashboard" />
                </span>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI COMPONENTS</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/users"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Users</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to="/posts"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Posts</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-card.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">Orders</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-forms.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">Categories</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./authentication-login.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-login" />
                </span>
                <span className="hide-menu">Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./authentication-register.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Register</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./icon-tabler.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-mood-happy" />
                </span>
                <span className="hide-menu">Icons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./sample-page.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu">Sample Page</span>
              </a>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                  Upgrade to pro
                </h6>
                <a
                  href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                  className="btn btn-primary fs-2 fw-semibold lh-sm"
                >
                  Buy Pro
                </a>
              </div>
              <div className="unlimited-access-img">
                <img
                  src="../assets/images/backgrounds/rocket.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
}
