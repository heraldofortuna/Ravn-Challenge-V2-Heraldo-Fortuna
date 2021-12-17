import React from "react";
import "../styles/CharacterList.css";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, handleClick }) => {
  return (
    <div className="characterList">
      <div className="characterList__container">
        {characters.map((character) => (
          <div key={character.id} onClick={() => handleClick(character.id)}>
            <CharacterCard
              name={character.name}
              specie={character.species}
              homeworld={character.homeworld.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
