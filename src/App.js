import React from "react";
import AllPeopleQuery from "./services/AllPeopleQuery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

const App = () => {
  const { loading, error, data } = AllPeopleQuery();

  if (loading) return <p>Loading</p>;
  if (error) return <p>Whoops ... something is wrong!</p>;

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
