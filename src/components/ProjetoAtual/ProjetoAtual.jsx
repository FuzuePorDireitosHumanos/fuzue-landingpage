// Imagens
import CdSides from "../../assets/cd-sides.png";
import LogoProjeto from "../../assets/logo-cd.png";
import InstagramIcon from "../../assets/instagram-icon.png";

// Styles
import "./styles.css";

const ProjetoAtual = () => {
  return (
    <div className="projeto-atual-container">
      <img src={CdSides} className="sides" alt="img-e" />
      <div className="main-content">
        <img src={LogoProjeto} alt="logo-projeto" />
        <div className="texto-sobre">
          <p>
            O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
            coletivo que através da educação, política, arte e cultura, objetiva
            defender e promover os direitos humanos e a justiça social para
            grupos historicamente vulnerabilizados, tecendo uma rede de apoio e
            oportunidades, nesse sistema que nos explora e silencia. Nossa
            abordagem, nascida de uma inquietação, é a de um fuzuê: dinâmica,
            inclusiva e repleta de vida.
          </p>
          <div className="insta-link-cd">
            <img src={InstagramIcon} alt="icon-insta" />
            <a href="https://www.instagram.com/fuzuepordireitoshumanos/">Acompanhe no instagram!</a>
          </div>
        </div>
      </div>
      <img src={CdSides} className="sides" alt="img-d" />
    </div>
  );
};

export default ProjetoAtual;
