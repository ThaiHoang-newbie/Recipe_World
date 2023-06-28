import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserIn() {
  const [user, setUser] = useState({});
  const userId = sessionStorage.getItem("obtainer_id");

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://127.0.0.1:8000/api/get-obtainer/${userId}`)
        .then((res) => {
          const data = res.data;
          setUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("obtainer_id");
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 500);
  };

  return (
    <div className="text-right">
      {userId ? (
        <div className="d-flex align-items-center justify-content-between">
          {/* <img src={user.profile_image_url} alt="Avatar" className="avatar" /> */}
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/recipeworld-8ecc6.appspot.com/o/images%2F${user.profile_image_url}?alt=media&token=6faaf2a3-91a1-4350-9b33-9ccbcc755a28`}
            alt="Avatar"
            className="avatar"
          />
          <span>
            Hello, <Link to="/profile-page" className="text-success">{user.full_name}</Link>
          </span>
          <div class="btn-group" role="group" aria-label="Basic example">
            <Link to="/profile-page" type="button" class="btn btn-outline-success">
            <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/setting" type="button" class="btn btn-outline-success">
            <i className="fa-solid fa-gear"></i>
            </Link>
            <button onClick={logout} type="button" class="btn btn-outline-success">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
      ) : (
        <div className="btn-group">
          <Link to="/sign-up" className="btn btn-outline-success">
            Sign Up
          </Link>
          <Link to="/sign-in" className="btn btn-outline-success">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
