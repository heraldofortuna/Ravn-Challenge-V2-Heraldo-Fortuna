import React from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterList from "./components/CharacterList";

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
        <CharacterList characters={data?.allPeople.people} />
      )}
    </>
  );
};

export default App;
