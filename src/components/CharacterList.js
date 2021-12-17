import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  if (characters === null) return null;

  return characters.map((character) => (
    <div key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <CharacterCard
          name={character.name}
          specie={character.species}
          homeworld={character.homeworld.name}
        />
      </Link>
    </div>
  ));
};

export default CharacterList;
