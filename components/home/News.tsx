"use client";

import React from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { NewsCard } from "../cards/NewsCard";
import { NavBtn } from "./ui/NavBtn";
import { GreenBtn } from "../ui/Buttons";

import { newsCardData } from "@/lib/database/newsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const News = () => {
  return (
    <div className="container w-full">
      <header className="flex items-center mb-[43px] justify-between">
        <h2 className="text-extra font-semibold leading-[100%]">Новости</h2>
        <div className="flex items-center gap-x-[20px]">
          <NavBtn left />
          <NavBtn />
        </div>
      </header>

      <div className="mb-[35px]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          {newsCardData &&
            newsCardData.map((item) => (
              <SwiperSlide key={v4()}>
                <NewsCard {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <footer className="flex justify-center">
        <GreenBtn text="Все новости" />
      </footer>
    </div>
  );
};
