import React, { useRef } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CarnavalDemocracia from "./CarnavalDemocracia";
import RaizesCaatinga from "./RaizesCaatinga";
import TorneiraCheia from "./TorneiraCheia";
import ArrowNext from "../../assets/arrow_next.png";
import ArrowPrev from "../../assets/arrow_back.png";

const SlideProjetos = () => {
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
    <div className="slide-projetos-container">
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
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <CarnavalDemocracia />
        </SwiperSlide>
        <SwiperSlide>
          <RaizesCaatinga />
        </SwiperSlide>
        <SwiperSlide>
          <TorneiraCheia />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideProjetos;
