import React from "react";
import "../styles.css";
import Sides from "../../../assets/cd-sides.png";
import CarnavalDemocraciaLogo from "../../../assets/logo-cd.png";
import { projetosTxt } from "../../../constants";

const CarnavalDemocracia = () => {
  return (
    <div className="projetos-container" id="carnaval-democracia">
      <img src={Sides} alt="sides" className="side-left sides" />
      <div className="main-content">
        <img src={CarnavalDemocraciaLogo} alt="carnaval-democracia-logo" />
        <p>{projetosTxt[2]}</p>
      </div>
      <img src={Sides} alt="sides" className="side-right sides" />
    </div>
  );
};

export default CarnavalDemocracia;
