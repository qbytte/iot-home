import React from "react";
import { useState, useEffect } from "react";
import Temps from "../components/Temps";
import BackBtn from "../components/BackBtn";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import "../styles/RoomTemp.css";

const RoomTemp = () => {
  const [temps, setTemps] = useState({});
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://arduino-led-48439-default-rtdb.firebaseio.com/temp.json"
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const getData = async () => {
        const data = await fetchData();
        setTemps(data);
      };

      await getData();

      setInterval(async () => {
        await getData();
      }, 60000);
    })();
  }, []);

  return (
    <>
      <BackBtn />
      <h1>
        Room <span>Temperature</span>
      </h1>
      <Temps value={temps.c} type="celcius" isTemp offline={onlineStatus} />
      <Temps value={temps.f} type="fahrenheit" isTemp offline={onlineStatus} />
      <h1 className="Humidity">
        <span>Humidity</span>
      </h1>
      <Temps value={temps.h} offline={onlineStatus} />
      {!onlineStatus && <p className="Offline-Indicator">No connection</p>}
    </>
  );
};

export default RoomTemp;
