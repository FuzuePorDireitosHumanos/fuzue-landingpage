import CdSides from "../../assets/cd-sides.png";
import LogoProjeto from "../../assets/logo-cd.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import "./styles.css";
import { textoPrincipal } from "../../constants";

const ProjetoAtual = () => {
  return (
    <div className="projeto-atual-container">
      <img src={CdSides} className="sides" alt="img-e" />
      <div className="main-content">
        <img src={LogoProjeto} alt="logo-projeto" />
        <div className="texto-sobre">
          <p>{textoPrincipal[0]}</p>
        </div>
      </div>
      <img src={CdSides} className="sides" alt="img-d" />
    </div>
  );
};

export default ProjetoAtual;
