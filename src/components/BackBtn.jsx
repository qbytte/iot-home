import React from "react";
import { Link } from "react-router-dom";
import "../styles/BackBtn.css";
import back from "../static/angle-left-solid.svg";

const BackBtn = () => {
  return (
    <Link to="/">
      <div className="back-btn">
        <img src={back} alt="" />
      </div>
    </Link>
  );
};

export default BackBtn;
