import React from "react";
import "../styles.css";
import RaizesCaatingaLogo from "../../../assets/raizes.webp";
import { projetosTxt } from "../../../constants";

const RaizesCaatinga = () => {
  return (
    <div className="projetos-container" id="raizes-caatinga">
      <div className="main-content">
        <img src={RaizesCaatingaLogo} alt="raizes-caatinga-logo" />
        <p>{projetosTxt[0]}</p>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default RaizesCaatinga;
