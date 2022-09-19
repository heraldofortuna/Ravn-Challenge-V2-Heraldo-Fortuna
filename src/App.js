import React from "react";
import "./styles/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
