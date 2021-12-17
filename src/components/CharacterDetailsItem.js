import React from "react";
import "../styles/CharacterDetailsItem.css";

const CharacterDetailsItem = ({ title, value = "" }) => {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <li className="characterDetailsItem">
      <h2 className="characterDetailsItem__title">{title}</h2>
      <h2 className="characterDetailsItem__value">
        {title === "Birth Year" ? value.toUpperCase() : capitalize(value)}
      </h2>
    </li>
  );
};

export default CharacterDetailsItem;
