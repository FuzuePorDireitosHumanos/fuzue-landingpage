import FotoFuzue from "../../assets/fuzue-foto.png";
import { quemSomos } from "../../constants";
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
        <p>{quemSomos}</p>
        {/* <p>{textoPrincipal[1]}</p> */}
      </div>
    </div>
  );
};

export default SobreSection;
