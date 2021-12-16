import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_PEOPLE = gql`
  {
    allPeople {
      people {
        id
        name
        species {
          id
          name
        }
        homeworld {
          id
          name
        }
        eyeColor
        hairColor
        skinColor
        birthYear
        vehicleConnection {
          vehicles {
            id
            name
          }
        }
      }
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE);

  if (error) return <p>Whoops ... something is wrong!</p>;

  return (
    <>
      <h1>People of Stars Wars</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        data.allPeople.people.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>
              {character.species === null ? "Human" : character.species.name}{" "}
              from {character.homeworld.name}
            </p>
          </div>
        ))
      )}
    </>
  );
};

export default App;
