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
          <CharacterDetails title="General Information" details={character} />
          <h2>General Information</h2>
          <ul>
            <li>
              <h3>Eye Color</h3>
              <p>{character.eyeColor}</p>
            </li>
            <li>
              <h3>Hair Color</h3>
              <p>{character.hairColor}</p>
            </li>
            <li>
              <h3>Skin Color</h3>
              <p>{character.skinColor}</p>
            </li>
            <li>
              <h3>Birth Year</h3>
              <p>{character.birthYear}</p>
            </li>
          </ul>
          <h2>Vehicles</h2>
          <ul>
            {character.vehicleConnection.vehicles.map((vehicle) => (
              <li>
                <h3>{vehicle.name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Character;
