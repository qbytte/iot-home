import React from "react";
import Bulb from "../components/Bulb";
import BackBtn from "../components/BackBtn";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import '../styles/LightBulb.css'

const LightBulb = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <BackBtn />
      <h1>
        Light <span>Bulb</span>
      </h1>
      <Bulb offline={!onlineStatus} />
    </>
  );
};

export default LightBulb;
