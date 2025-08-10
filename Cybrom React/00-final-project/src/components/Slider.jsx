import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div style={{ width: "100%", height: "80vh", position: "relative" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide style={slideStyle}><img src="offer2.jpg" className="w-[100vw] h-[635px] bg-cover"/></SwiperSlide>
        <SwiperSlide style={slideStyle}><img src="offer3.webp" className="w-[100vw] h-[635px] bg-cover"/></SwiperSlide>
        <SwiperSlide style={slideStyle}><img src="offer4.jpg" className="w-[100vw] h-[635px] bg-cover"/></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <style>{`
        .autoplay-progress {
          position: absolute;
          right: 10px;
          bottom: 50px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .autoplay-progress svg {
          --progress: 0;
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }
        .autoplay-progress circle {
          fill: none;
          stroke: #2196f3;
          stroke-width: 4;
          stroke-dasharray: 126;
          stroke-dashoffset: calc(126 * (1-var(--progress)));
          transition: stroke-dashoffset 0.25s linear;
        }
        .autoplay-progress span {
          position: absolute;
          font-size: 12px;
          color: #2196f3;
        }
      `}</style>
    </div>
  );
};

const slideStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  background: "rgb(98,193,229)",
  color: "white",
};

export default Slider;