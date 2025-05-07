import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";

const Slide = ({ text, image, title }) => {
  return (
    <div className="eixo-container">
      <p style={{ textAlign: "justify" }}>{text}</p>
      <div className="imagem-eixo">
        <h1>{title}</h1>
        <img src={image} alt="eixo-image" />
      </div>
    </div>
  );
};

export default Slide;
