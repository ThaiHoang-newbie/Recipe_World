import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./receivers/Post";
import _ from "lodash";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getAllPosts")
      .then((res) => {
        const data = res.data;
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.full_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  const handleSearch = _.debounce((value) => {
    setSearchQuery(value);
    console.log(searchQuery);
  }, 10, { trailing: true });

  return (
    <div className="container-fluid">
      <div className="form-outline">
        <input
          className="form-control"
          type="search"
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search by title"
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : filteredPosts.length > 0 ? (
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
            {filteredPosts.map((post, index) => (
              <Post
                key={post.id}
                id={index + 1}
                obtainer={post.full_name}
                category={post.name}
                title={post.title}
                content={post.content}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
