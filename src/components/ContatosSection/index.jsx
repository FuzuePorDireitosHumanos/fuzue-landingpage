import "./styles.css";
import FirstFigure from "../../assets/ê-contatos.png";
import SecondFigure from "../../assets/star-contatos.png";
import ThirdFigure from "../../assets/u-contatos.png";
import InstaIcon from "../../assets/instagram-icon.png";
import { contatos } from "../../constants";

const ContatosSection = () => {
  return (
    <div className="contatos-container">
      <img src={FirstFigure} className="first-figure-contatos" alt="figura-e" />
      <img
        src={SecondFigure}
        className="second-figure-contatos"
        alt="figura-estrela"
      />
      <img src={ThirdFigure} className="third-figure-contatos" alt="figura-u" />
      <div className="contatos">
        <h1>CONTATOS</h1>
        <p>{contatos[0]}</p>
        <p>{contatos[1]}</p>
        <div className="email">
          <h1>fuzuepordireitoshumanos@gmail.com</h1>
        </div>
        <div className="insta">
          <img src={InstaIcon} alt="icon-insta" />
          <h2>
            <a
              href="https://www.instagram.com/institutofuzue/"
              target="_blank"
            >
              @institutofuzue
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContatosSection;
