import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CarnavalDemocracia from "./CarnavalDemocracia";
import RaizesCaatinga from "./RaizesCaatinga";
import TorneiraCheia from "./TorneiraCheia";

const SlideProjetos = () => {
  return (
    <div className="slide-projetos-container">
      <Swiper
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
