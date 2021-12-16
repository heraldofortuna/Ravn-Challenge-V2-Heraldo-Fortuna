import React from "react";
import { Link, useParams } from "react-router-dom";

const Character = ({ characters }) => {
  const id = useParams().id;
  const character = characters.find((character) => character.id === id);
  console.log(id, character);

  return (
    <>
      <h2>Character Details</h2>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
    </>
  );
};

export default Character;
