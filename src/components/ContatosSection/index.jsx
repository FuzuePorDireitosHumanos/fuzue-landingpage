import React from "react";
// Styles
import "./styles.css";
// Imagens
import FirstFigure from "../../assets/ê-contatos.png";
import SecondFigure from "../../assets/star-contatos.png";
import ThirdFigure from "../../assets/u-contatos.png";
import InstaIcon from "../../assets/instagram-icon.png";

const ContatosSection = () => {
  return (
    <div className="contatos-container">
      {/* Figura inferior direita */}
      <img src={FirstFigure} className="first-figure-contatos" alt="figura-e" />
      {/* Figura inferior esquerda */}
      <img
        src={SecondFigure}
        className="second-figure-contatos"
        alt="figura-estrela"
      />
      {/* Figura topo */}
      <img src={ThirdFigure} className="third-figure-contatos" alt="figura-u" />
      <div className="contatos">
        <h1>CONTATOS</h1>
        <p>
          O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
          coletivo que através da educação, política, arte e cultura, objetiva
          defender e promover os direitos humanos e a justiça social para grupos
          historicamente vulnerabilizados, tecendo uma rede de apoio e
          oportunidades, nesse sistema que nos explora e silencia.
        </p>
        {/* Contato email */}
        <div className="email">
          <h1>fuzuepordireitoshumanos@gmail.com</h1>
        </div>
        {/* Contato instagram */}
        <div className="insta">
          <img src={InstaIcon} alt="icon-insta" />
          <h2>
            <a
              href="https://www.instagram.com/fuzuepordireitoshumanos/"
              target="_blank"
            >
              @fuzuepordireitoshumanos
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContatosSection;
