// swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import styled from "styled-components";
import Youtude from "./Youtude";
import "../utilities/style.css";

const Showcase = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const swiperParams = {
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 4000 },
    slidesPerView: 1,
    loop: true,
    // onSwiper: (swiper) => console.log(swiper),
    // onSlideChange: () => console.log("slide change"),
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <Youtude Y1 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtude Y2 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtude Y3 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtude Y4 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtude Y5 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
