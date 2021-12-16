import React from "react";
import { Link } from "react-router-dom";

const CharacterList = ({ characters }) => {
  if (characters === null) return null;

  return characters.map((character) => (
    <div
      key={character.id}
      onClick={() => {}}
      style={{ border: "1px solid red" }}
    >
      <Link to={`/character/${character.name}`}>
        <h2>{character.name}</h2>
        <p>
          {character.species === null ? "Human" : character.species.name} from{" "}
          {character.homeworld.name}
        </p>
      </Link>
    </div>
  ));
};

export default CharacterList;
