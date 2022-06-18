import React from "react";
import "../styles/Card.css";

const Card = ({ img, title, desc }) => {
  return (
    <div className="Card">
      <div className="Card-Header">
        <div>
          <img src={img} alt="" aria-hidden="true" />
        </div>
        <header>{title}</header>
      </div>
      <p className="Card-Desc">{desc}</p>
    </div>
  );
};

export default Card;
