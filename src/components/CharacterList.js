import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, handleClick }) => {
  return characters.map((character) => (
    <div key={character.id} onClick={() => handleClick(character.id)}>
      <CharacterCard
        name={character.name}
        specie={character.species}
        homeworld={character.homeworld.name}
      />
    </div>
  ));
};

export default CharacterList;
