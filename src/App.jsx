import { useRef } from "react";
import "./App.css";
import FuzueLogo from "./assets/fuzue-logo.png";
import Button from "./components/Buttons";
import SobreSection from "./components/Sobre";
import FirstFigure from "./assets/ê.png";
import SecondFigure from "./assets/Star.png";
import ThirdFigure from "./assets/u.png";

function App() {
  const aboutSection = useRef(null);

  return (
    <>
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
          <Button text="AÇÕES" sectionTarget={aboutSection} bgcolor="#015CFF" />
          <Button
            text="CONTATOS"
            sectionTarget={aboutSection}
            bgcolor="#F2B705"
          />
        </div>
      </header>
      <div className="sections">
        <section ref={aboutSection} className="sobre">
          <SobreSection />
        </section>
      </div>
    </>
  );
}

export default App;
