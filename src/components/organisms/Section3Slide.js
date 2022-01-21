// swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import styled from "styled-components";
import SlideItems from "./Section3SlideItems";

import "../utilities/style.css"

const Showcase = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <Swiper
      className="swiper"
      //   navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      //   spaceBetween={600}
      loop={true}
      slidesOffsetBefore={0}
      onSwiper={(swiper) => console.log(swiper)}
      nSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <SlideItems I1 />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItems I2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
