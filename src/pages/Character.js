import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Character = ({ characters }) => {
  const id = useParams().id;
  const character = characters.find((character) => character.id === id);

  return (
    <>
      <Header title={character.name} canReturn />
      <h3>{character.name}</h3>
    </>
  );
};

export default Character;
