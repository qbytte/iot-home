import React from "react";
import { useState, useEffect } from "react";
import '../styles/Bulb.css'

const Bulb = ({ offline }) => {
  const [isLit, setIsLit] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://arduino-led-48439-default-rtdb.firebaseio.com/led.json"
      );
      const json = await response.json();
      return json.status;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = async () => {
    await fetch(
      "https://arduino-led-48439-default-rtdb.firebaseio.com/led/.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: !isLit,
        }),
      }
    );
    const led = await fetchData();
    setIsLit(led);
  };

  useEffect(() => {
    (async () => {
      const led = await fetchData();
      setIsLit(led);
    })();
  }, []);

  return <button disabled={offline} onClick={handlePress} className={`Bulb ${isLit ? "Active" : ""} ${offline ? "Offline" : ""}`}>{
      isLit ? "ON" : offline ? "OFFLINE" : "OFF"
    }</button>;
};

export default Bulb;
