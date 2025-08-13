import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    "offer2.jpg",
    "offer3.webp",
    "offer5.jpg",
    "offer1.jpg",
    "offer6.png",
  ];

  return (
    <div className="w-full h-[91vh] relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} style={slideStyle}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        /* Pagination dots color */
        .swiper-pagination-bullet {
          background-color: rgb(68,202,250);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #29b6f6;
        }
      `}</style>
    </div>
  );
};

const slideStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  height: "100%",
};

export default Slider;
