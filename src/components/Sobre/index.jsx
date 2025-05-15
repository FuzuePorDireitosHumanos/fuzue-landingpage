import React from "react";
import FotoFuzue from "../../assets/fuzue-foto.png";
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
        <p>
          O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
          coletivo que através da educação, política, arte e cultura, objetiva
          defender e promover os direitos humanos e a justiça social para grupos
          historicamente vulnerabilizados, tecendo uma rede de apoio e
          oportunidades, nesse sistema que nos explora e silencia.
        </p>
        <p>
          Nossa abordagem, nascida de uma inquietação, é a de um fuzuê:
          dinâmica, inclusiva e repleta de vida. Somos um caldeirão de ideias e
          ações que fervilham com o propósito de criar um ambiente de luta por
          mudança social. O Fuzuê não é apenas um nome, é a manifestação de
          nosso compromisso em fazer a diferença, celebrando a diversidade e o
          potencial de nossos territórios para construir um futuro mais justo.
        </p>
      </div>
    </div>
  );
};

export default SobreSection;
