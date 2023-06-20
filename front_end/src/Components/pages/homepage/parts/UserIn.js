import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserIn() {
  const [status, setStatus] = useState(true);

  return (
    <div className="text-right">
      {status ? (
        <div className="btn-group">
          <Link to="/sign-up" className="btn btn-success">
            Sign Up
          </Link>
          <Link to="/sign-in" className="btn btn-outline-success">
            Sign In
          </Link>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-around">
          <img src="/images/r1.png" alt="Avatar" className="avatar" />
          <span>Good day <span className="text-success">Hoàng</span></span>
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > 
              <i class="fa-solid fa-bars"></i>
            </button>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" to="/profile-page">
                My Page
              </Link>
              <Link className="dropdown-item" to="/setting">
                Setting
              </Link>
              <Link className="dropdown-item" to="/logout">
                Log out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
