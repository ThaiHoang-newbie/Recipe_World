import React from "react";
import "../../../../../assets/style.css";
import { Link } from "react-router-dom";
function Products({
  id,
  full_name,
  thumbnail,
  category,
  title,
  content,
  created_at,
}) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-small-receipe-area d-flex">
        {/* Receipe Thumb */}
        <div className="receipe-thumb">
          <img src={thumbnail} alt="" />
        </div>
        {/* Receipe Content */}
        <div className="receipe-content">
          <span>{created_at}</span>
          <a href="receipe-post.html">
            <h5>{title}</h5>
          </a>
          <div className="ratings">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </div>
          <Link to={`/recipe/${id}`}>Detail</Link>
        </div>
      </div>
    </div>
  );
}
export default Products;
