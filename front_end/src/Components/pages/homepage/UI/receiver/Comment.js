import React from "react";

export default function Comment({
  full_name,
  created_at,
  content,
  profile_image_url,
}) {
  return (
    <div className="comment text-justify">
      <img
        src={profile_image_url}
        alt=""
        className="rounded-circle"
        width={40}
        height={40}
      />
      <div className="content">
        <h4>{full_name}</h4>
        <span>
          {new Date(created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          {" at "}
          {new Date(created_at).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        <br />
        <p>{content}</p>
      </div>
    </div>
  );
  
}
