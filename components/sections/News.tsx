"use client";

import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  A11y,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { NewsCard } from "../cards/NewsCard";
import { NavBtn } from "../ui/NavBtn";
import { newsCardData } from "@/lib/database/newsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const News = () => {
  const swiper = useSwiper();
  const [firstSlide, setFirstSlide] = React.useState(true);
  const [endSlide, setEndSlide] = React.useState(false);

  const setSlide = (swiper: any) => {
    setFirstSlide(swiper.isBeginning);
    setEndSlide(swiper.isEnd);
  };

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
        modules={[Pagination, Navigation, Scrollbar, A11y, Controller]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        // onSwiper={}
        onSlideChange={setSlide}
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
