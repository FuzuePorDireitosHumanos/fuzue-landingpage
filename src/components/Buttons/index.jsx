import React from "react";
import "./styles.css";

const Button = ({ text, sectionTarget, bgcolor }) => {
  function scrollToSection() {
    sectionTarget.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="button-container">
      <button onClick={scrollToSection} style={{ backgroundColor: bgcolor }}>{text}</button>
    </div>
  );
};

export default Button;
