import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MiniStar from "../../assets/mini-star.png";
import Slide from "../Slide";
import EixoImagem from "../../assets/eixo-image.png";
import { Autoplay } from "swiper/modules";
import "./styles.css";

const EixosSection = () => {
  return (
    <div className="eixos-container">
      <div className="title-container">
        <img src={MiniStar} />
        <div className="title">
          <h1>EIXOS</h1>
        </div>
      </div>
      <p>
        O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
        coletivo que através da educação, política, arte e cultura, objetiva
        defender e promover os direitos humanos e a justiça social para grupos
        historicamente vulnerabilizados, tecendo uma rede de apoio e
        oportunidades, nesse sistema que nos explora e silencia.
      </p>
      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          //   rewind={false}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Slide
              text="O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
            coletivo que através da educação, política, arte e cultura, objetiva
            defender e promover os direitos humanos e a justiça social para grupos
            historicamente vulnerabilizados, tecendo uma rede de apoio e
            oportunidades, nesse sistema que nos explora e silencia."
              title="Justiça Climática"
              image={EixoImagem}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              text="O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
            coletivo que através da educação, política, arte e cultura, objetiva
            defender e promover os direitos humanos e a justiça social para grupos
            historicamente vulnerabilizados, tecendo uma rede de apoio e
            oportunidades, nesse sistema que nos explora e silencia."
              title="Justiça climática"
              image={EixoImagem}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EixosSection;
