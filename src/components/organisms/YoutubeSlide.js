// swiper
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Youtube from "./Youtube";
import "../utilities/style.css";

const Showcase = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const swiperParams = {
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 4000 },
    slidesPerView: 1,
    loop: true,

    onSwiper: (swiper) => console.log(swiper),
  };

  return (
    <Swiper {...swiperParams}>
      <SwiperSlide>
        <Youtube Y1 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtube Y2 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtube Y3 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtube Y4 />
      </SwiperSlide>
      <SwiperSlide>
        <Youtube Y5 />
      </SwiperSlide>
    </Swiper>
  );
};

export default Showcase;
