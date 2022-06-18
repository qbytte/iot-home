import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ img, title, desc, link }) => {
  return (
    <Link to={link}>
      <div className="Card">
        <div className="Card-Header">
          <div>
            <img src={img} alt="" aria-hidden="true" />
          </div>
          <header>{title}</header>
        </div>
        <p className="Card-Desc">{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
