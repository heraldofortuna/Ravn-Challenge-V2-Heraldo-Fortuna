import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

const App = () => {
  // const { loading, error, data } = AllPeopleQuery();

  // if (loading) return <p>Loading</p>;
  // if (error) return <p>Whoops ... something is wrong!</p>;

  return (
    <Router>
      <Routes>
        <Route exact path="/characters/:id" element={<Character />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
