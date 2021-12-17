import React from "react";
import "../styles/CharacterCard.css";
import arrow from "../assets/arrow.svg";

const CharacterCard = ({ name, specie, homeworld }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__content">
          <h2 className="card__content__name">{name}</h2>
          <p className="card__content__description">
            {specie === null ? "Human" : specie.name} from {homeworld}
          </p>
        </div>
        <img
          className="card__arrow"
          src={arrow}
          alt="Go to character details arrow icon"
        />
      </div>
    </div>
  );
};

export default CharacterCard;
