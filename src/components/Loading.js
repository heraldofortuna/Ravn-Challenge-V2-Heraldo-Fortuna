import React from "react";
import "../styles/Loading.css";
import Loader from "./Loader";

const Loading = () => {
  return (
    <div className="loading">
      <Loader />
      <h2 className="loading__text">Loading</h2>
    </div>
  );
};

export default Loading;
