import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide";
import { Autoplay } from "swiper/modules";
import "./styles.css";
import EixoImagem from "../../assets/eixo-image.png";
import MiniStar from "../../assets/mini-star.png";
import ArrowNext from "../../assets/arrow_next.png";
import ArrowPrev from "../../assets/arrow_back.png";
import { eixos, eixosText } from "../../constants";

const EixosSection = () => {
  const swiperRef = useRef(null);

  // Função para ir ao proximo eixo(slide)
  function nextSlide() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }

  // Função para ir ao eixo(slide) anterior
  function prevSlide() {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  return (
    <div className="eixos-container">
      <div className="title-container">
        <img src={MiniStar} alt="mini-estrela" />
        <div className="title">
          <h1>EIXOS</h1>
        </div>
      </div>
      <p>{eixosText}</p>
      <div className="swiper-wrapper">
        <div className="buttons-move">
          <div className="button-prev" onClick={prevSlide}>
            <img src={ArrowPrev} alt="seta-voltar" />
          </div>
          <div className="button-next" onClick={nextSlide}>
            <img src={ArrowNext} alt="seta-proximo" />
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          modules={[Autoplay]}
        >
          {eixos.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide text={item.text} title={item.title} image={item.img || EixoImagem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="buttons-move-mobile">
        <div className="button-prev-mob" onClick={prevSlide}>
          <img src={ArrowPrev} alt="seta-voltar" />
        </div>
        <div className="button-next-mob" onClick={nextSlide}>
          <img src={ArrowNext} alt="seta-proximo" />
        </div>
      </div>
    </div>
  );
};

export default EixosSection;
