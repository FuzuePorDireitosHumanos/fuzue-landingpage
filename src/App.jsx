import { useRef } from "react";
import "./App.css";
import FuzueLogo from "./assets/fuzue-logo.png";
import Button from "./components/Buttons";
import SobreSection from "./components/Sobre";

function App() {
  const aboutSection = useRef(null);

  return (
    <div>
      <header>
        <img src={FuzueLogo} alt="" />
        <div className="buttons">
          <Button text="QUEM SOMOS" sectionTarget={aboutSection} bgcolor="#EA0287" />
          <Button text="AÇÕES" sectionTarget={aboutSection} bgcolor="#015CFF" />
          <Button text="CONTATOS" sectionTarget={aboutSection} bgcolor="#F2B705" />
        </div>
      </header>
      <div className="sections">
        <section ref={aboutSection} className="sobre">
          <SobreSection />          
        </section>
      </div>
    </div>
  );
}

export default App;
