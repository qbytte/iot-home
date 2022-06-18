import React from "react";
import Bulb from "../components/Bulb";
import BackBtn from "../components/BackBtn";
import '../styles/LightBulb.css'

const LightBulb = () => {
  return (
    <>
      <BackBtn />
      <h1>
        Light <span>Bulb</span>
      </h1>
      <Bulb />
    </>
  );
};

export default LightBulb;
