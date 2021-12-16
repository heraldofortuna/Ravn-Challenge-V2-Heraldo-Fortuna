import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/character/:name" element={<Home />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
