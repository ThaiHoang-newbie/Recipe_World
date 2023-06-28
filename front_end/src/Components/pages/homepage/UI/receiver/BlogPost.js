import React from "react";
import { Link } from "react-router-dom";

export default function BlogPost({
  id,
  created_at,
  title,
  content,
  full_name,
  category,
  thumbnail
}) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const date = new Date(created_at);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="single-blog-area mb-80">
      {/* Thumbnail */}
      <div className="blog-thumbnail">
        <img src={thumbnail} alt="" />
        {/* Post Date */}
        <div className="post-date">
          <h3 className="text-light">{day}</h3>
          <p className="text-light date">
            {month},
            <br />
            {year}
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="blog-content">
        <a href="#" className="post-title">
          {title}
        </a>
        <div className="meta-data">
          by {full_name}, &nbsp;
           <a href="#">{category}</a>
        </div>
        <p>{content}</p>
        <Link to={`/recipe/${id}`} className="btn delicious-btn mt-30">
          Read More
        </Link>
      </div>
    </div>
  );
}
