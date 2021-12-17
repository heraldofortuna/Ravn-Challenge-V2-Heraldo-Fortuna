import React from "react";

const CharacterDetails = ({ title, details }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        <li>
          <h3>Eye Color</h3>
          <p>{details.eyeColor}</p>
        </li>
        <li>
          <h3>Hair Color</h3>
          <p>{details.hairColor}</p>
        </li>
        <li>
          <h3>Skin Color</h3>
          <p>{details.skinColor}</p>
        </li>
        <li>
          <h3>Birth Year</h3>
          <p>{details.birthYear}</p>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetails;
