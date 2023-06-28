import axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "../pages/homepage/UI/receiver/Comment";
import "./comment.css";
import { Link } from "react-router-dom";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const obtainer_id = sessionStorage.getItem("obtainer_id");

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const fetchComments = () => {
    axios
      .get(`http://localhost:8000/api/posts/comments/${postId}`)
      .then((res) => {
        const data = res.data;
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      post_id: postId,
      content: newComment,
      obtainer_id: obtainer_id,
    };

    axios
      .post("http://localhost:8000/api/comment", commentData)
      .then((res) => {
        const newComment = res.data;
        setComments((prevComments) => [...prevComments, newComment]);
        setNewComment("");
        window.location.href=`/recipe/${postId}`
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="section-heading text-left">
            <h3>Leave a comment</h3>
          </div>
          <div className="col-12">
            <div className="row">
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <Comment
                    key={index}
                    full_name={comment.full_name}
                    profile_image_url={comment.profile_image_url}
                    created_at={comment.created_at}
                    content={comment.content}
                  />
                ))
              ) : (
                <p>No comments available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="contact-form-area">
            {obtainer_id ? (
              <form action="#" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 my-4">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Message"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn delicious-btn mt-30" type="submit">
                      Post Comments
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="row">
                <div className="col-12">
                  <p>
                    You must <Link to="/sign-in">Login</Link> to comment{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
