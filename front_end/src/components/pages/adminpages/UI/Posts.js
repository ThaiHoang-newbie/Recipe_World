import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./receivers/Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPosts")
      .then((res) => {
        const data = res.data;
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {posts && posts.length > 0 ? (
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
              {posts.map((post, index) => (
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
