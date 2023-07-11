import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./receivers/Post";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPosts")
      .then((res) => {
        const data = res.data;
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {categories && categories.length > 0 ? (
        <div className="container-fluid">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Obtainer</th>
                <th>Category</th>
                <th>Title</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((post, index) => (
                <Post
                  key={post.id}
                  id={index + 1}
                  obtainer={post.obtainer_id}
                  category={post.category_id}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}
