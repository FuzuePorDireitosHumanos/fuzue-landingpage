import React from "react";
import "../styles.css";
import TorneiraCheiaLogo from "../../../assets/torneira.webp";
import { projetosTxt } from "../../../constants";

const TorneiraCheia = () => {
  return (
    <div className="projetos-container" id="torneira-cheia">
      <div className="main-content">
        <img src={TorneiraCheiaLogo} alt="torneira-cheia-logo" />
        <p>{projetosTxt[1]}</p>
      </div>
    </div>
  );
};

export default TorneiraCheia;
