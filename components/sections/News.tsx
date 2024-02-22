"use client";

import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { NewsCard } from "../NewsCard";
import { NavBtn } from "../ui/NavBtn";
import { newsCardData } from "@/lib/data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const News = () => {
  const swiper = useSwiper();
  const [next, setNext] = React.useState(false);

  console.log(swiper);

  return (
    <div className="container">
      <header className="flex items-center mb-[43px] justify-between">
        <h2 className="text-extra">Новости</h2>
        <div className="flex items-center gap-x-[20px]">
          <NavBtn left />
          <NavBtn />
        </div>
      </header>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {newsCardData.map((item) => (
          <SwiperSlide>
            <NewsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
