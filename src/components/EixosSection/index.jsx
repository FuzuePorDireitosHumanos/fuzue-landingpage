import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "../Slide";
import { Autoplay } from "swiper/modules";
// Styles
import "./styles.css";
// Imagens
import EixoImagem from "../../assets/eixo-image.png";
import MiniStar from "../../assets/mini-star.png";
import ArrowNext from "../../assets/arrow_next.png";
import ArrowPrev from "../../assets/arrow_back.png";

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
      
      {/* div swiper */}
      <div className="swiper-wrapper">

        {/* Botões para mover entre slides */}
        <div className="buttons-move">

          {/* Botao slide anterior */}
          <div className="button-prev" onClick={prevSlide}>
            <img src={ArrowPrev} />
          </div>

          {/* Botão proximo slide */}
          <div className="button-next" onClick={nextSlide}>
            <img src={ArrowNext} />
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

          {/* Slide 1 */}
          <SwiperSlide>
            <Slide
              text="O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
            coletivo que através da educação, política, arte e cultura, objetiva
            defender e promover os direitos humanos e a justiça social para
            grupos historicamente vulnerabilizados, tecendo uma rede de apoio e
            oportunidades, nesse sistema que nos explora e silencia. Nossa
            abordagem, nascida de uma inquietação, é a de um fuzuê: dinâmica,
            inclusiva e repleta de vida."
              title="Justiça Climática"
              image={EixoImagem}
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <Slide
              text="O Fuzuê é a sinergia das juventudes pernambucanas reunidas em um
            coletivo que através da educação, política, arte e cultura, objetiva
            defender e promover os direitos humanos e a justiça social para
            grupos historicamente vulnerabilizados, tecendo uma rede de apoio e
            oportunidades, nesse sistema que nos explora e silencia. Nossa
            abordagem, nascida de uma inquietação, é a de um fuzuê: dinâmica,
            inclusiva e repleta de vida."
              title="Justiça climática"
              image={EixoImagem}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="buttons-move-mobile">
        <div className="button-prev-mob" onClick={prevSlide}>
          <img src={ArrowPrev} />
        </div>
        <div className="button-next-mob" onClick={nextSlide}>
          <img src={ArrowNext} />
        </div>
      </div>
    </div>
  );
};

export default EixosSection;
