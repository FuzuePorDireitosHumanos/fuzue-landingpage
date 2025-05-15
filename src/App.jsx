import { useRef } from "react";
// Components
import Button from "./components/Buttons";
import SobreSection from "./components/Sobre";
import EixosSection from "./components/EixosSection";
import ContatosSection from "./components/ContatosSection";
// Styles
import "./App.css";
// Imagens
import FuzueLogo from "./assets/fuzue-logo.png";
import FirstFigure from "./assets/ê.png";
import SecondFigure from "./assets/Star.png";
import ThirdFigure from "./assets/u.png";
import ProjetoAtual from "./components/ProjetoAtual/ProjetoAtual";

function App() {
  const aboutSection = useRef(null);
  const eixosSection = useRef(null);
  const contatosSection = useRef(null);

  return (
    <div>
      <header>
        {/* Background figures */}
        {/* <div className="bg-figures">
       </div> */}
        {/* Figura topo esquerda */}
        <img src={FirstFigure} className="first-figure" />
        {/* Figura topo direita */}
        <img src={SecondFigure} className="second-figure" />
        {/* Figura baixo direita */}
        <img src={ThirdFigure} className="third-figure" />

        <img src={FuzueLogo} alt="logo-fuzue" />
        <div className="buttons">
          <Button
            text="QUEM SOMOS"
            sectionTarget={aboutSection}
            bgcolor="#EA0287"
          />
          <Button text="EIXOS" sectionTarget={eixosSection} bgcolor="#015CFF" />
          <Button
            text="CONTATOS"
            sectionTarget={contatosSection}
            bgcolor="#F2B705"
          />
        </div>
      </header>
      <div className="sections">
        <section ref={aboutSection} className="sobre">
          <SobreSection />
        </section>
        <section ref={eixosSection} className="eixos">
          <EixosSection />
          <ProjetoAtual />
        </section>
        <section ref={contatosSection} className="contatos">
          <ContatosSection />
        </section>
      </div>
    </div>
  );
}

export default App;
