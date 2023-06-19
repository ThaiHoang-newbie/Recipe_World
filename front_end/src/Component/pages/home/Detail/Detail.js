import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/players/${id}`)
      .then((res) => {
        const data = res.data;
        setPlayer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!player) {
    return <div>Loading player data...</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Name: {player.name}</p>
      <p>Age: {player.age}</p>
      <p>Country: {player.country}</p>
      <p>CLB: {player.CLB}</p>
    </div>
  );
};

export default Detail;
