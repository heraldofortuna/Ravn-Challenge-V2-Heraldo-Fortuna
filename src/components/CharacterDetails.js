import React from "react";
import "../styles/CharacterDetails.css";
import CharacterDetailsItem from "./CharacterDetailsItem";

const CharacterDetails = ({ details }) => {
  const general = ["Eye Color", "Hair Color", "Skin Color", "Birth Year"];

  return (
    typeof details !== "undefined" && (
      <div className="characterDetails">
        <div className="characterDetails__container">
          <div>
            <h2 className="characterDetailsTitle">General Information</h2>
            <ul>
              {general.map((detail, id) => {
                const str = detail.split(" ").join("");
                const value = str[0].toLowerCase() + str.slice(1);

                return (
                  <CharacterDetailsItem
                    key={id}
                    title={detail}
                    value={details[value]}
                  />
                );
              })}
            </ul>
          </div>
          {details.vehicleConnection.vehicles.length !== 0 && (
            <div>
              <h2 className="characterDetailsTitle">Vehicles</h2>
              <ul>
                {details.vehicleConnection.vehicles.map((vehicle) => (
                  <CharacterDetailsItem key={vehicle.id} title={vehicle.name} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default CharacterDetails;
