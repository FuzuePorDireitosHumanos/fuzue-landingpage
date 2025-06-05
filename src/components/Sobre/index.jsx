import React from "react";
import FotoFuzue from "../../assets/fuzue-foto.png";
import { sobre } from "../../constants";
import "./styles.css";

const SobreSection = () => {
  return (
    <div className="sobre-container">
      <h1 className="sobre-mobile">QUEM SOMOS</h1>
      <div className="imagem">
        <img src={FotoFuzue} alt="foto-fuzue" />
      </div>
      <div className="sobre">
        <h1>QUEM SOMOS</h1>
        <p>{sobre[0]}</p>
        <p>{sobre[1]}</p>
      </div>
    </div>
  );
};

export default SobreSection;
