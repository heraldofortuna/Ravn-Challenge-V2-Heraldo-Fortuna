import React, { useState } from "react";
import "../styles/CharacterList.css";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters, handleClick }) => {
  const [currentCharacterId, setCurrentCharacterId] = useState(null);

  const handleCurrentCharacter = (id) => {
    handleClick(id);
    setCurrentCharacterId(id);
  };

  return (
    <div className="characterList">
      <div className="characterList__container">
        {characters.map((character) => (
          <div
            key={character.id}
            onClick={() => handleCurrentCharacter(character.id)}
            className={character.id === currentCharacterId ? "card--focus" : ""}
          >
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
