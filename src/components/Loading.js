import React from "react";
import "../styles/Loading.css";
import loader from "../assets/loader.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loader} alt="Page loading icon" />
      <h2 className="loading__text">Loading</h2>
    </div>
  );
};

export default Loading;
