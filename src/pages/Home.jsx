import React from "react";
import Card from "../components/Card";
import bulb from "../static/lightbulb-solid.svg";
import temp from "../static/temperature-half-solid.svg";
import gitHub from "../static/github-brands.svg";
import '../styles/Home.css'

const Home = () => {
  return (
    <>
      <h1>
        IoT <span>Home</span>
      </h1>
      <div className="Cards-Container">
        <Card
          img={bulb}
          title="Light Bulb"
          desc="Regular bulb controlled by an Arduino and a remote database"
        />
        <Card
          img={temp}
          title="Temperature"
          desc="Temperature values obtained from remote database connected to an Arduino board"
        />
      </div>
      <div className="GitHub">
        <img src={gitHub} alt="Github" />
      </div>
    </>
  );
};

export default Home;
