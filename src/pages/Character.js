import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import CharacterDetails from "../components/CharacterDetails";

const Character = ({ characters }) => {
  const id = useParams().id;
  const character = characters.find((character) => character.id === id);

  return (
    <>
      <Header title={character.name} canReturn />
      <main>
        <div className="container">
          <CharacterDetails details={character} />
        </div>
      </main>
    </>
  );
};

export default Character;
