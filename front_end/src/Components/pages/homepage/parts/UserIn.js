import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
export default function UserIn() {
  const [status, setStatus] = useState(true);
  const [user, setUser] = useState({})
  useEffect(() => {
    const userId = sessionStorage.getItem("obtainer_id");
    if (userId) {
      setStatus(false);
    }
    axios.get(`http://127.0.0.1:8000/api/get-obtainer/${userId}`).then(res => { 
      const data = res.data
      setUser(data)
  }).catch(err => { console.log(err); })
  }, []);

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
          <img src={user.profile_image_url} alt="Avatar" className="avatar" />
          <span>Good day, <span className="text-success">{user.full_name}</span></span>
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

            <div className="box-options dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
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
