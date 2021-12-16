import React from "react";
import { useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

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

  if (loading) return <p>Loading</p>;
  if (error) return <p>Whoops ... something is wrong!</p>;
  console.log(data);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/characters/:id"
          element={<Character characters={data.allPeople.people} />}
        />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
