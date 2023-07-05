import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Pops({ message }) {
  const userId = sessionStorage.getItem("obtainer_id");
  const { id, sender, recipient, post_id, status } = message;
  const [accepted, setAccepted] = useState(status);

  const accept = () => {
    const buyingInformation = {
      sender_id: recipient.id,
      recipient_id: sender.id,
      post_id: post_id,
      status: 1,
    };

    axios
      .put(`http://localhost:8000/api/order/${id}`, buyingInformation)
      .then((res) => {
        setAccepted(true);
        alert("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {status && sender.id === userId ? (
        <div className="d-flex justify-content-between align-items-center">
          <div className="mx-4">
            <h3>Success</h3>
            <p>{sender.full_name} sold his/her recipe</p>
          </div>
          <div>
            <Link to={`/recipe/${post_id}`} className="btn btn-success">
              See your new recipe
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <div className="mx-4">
            <h3>Order</h3>
            <p>{sender.full_name} wants to buy your recipe</p>
          </div>
          {accepted ? (
            <button className="btn btn-outline-success" disabled>
              Accepted
            </button>
          ) : (
            <button className="btn btn-success" onClick={accept}>
              Accept
            </button>
          )}
        </div>
      )}
    </>
  );
}
