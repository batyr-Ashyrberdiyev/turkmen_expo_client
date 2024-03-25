"use client";

import React from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { NewsCard } from "../cards/NewsCard";
import { NavBtn } from "./ui/NavBtn";
import { GreenBtn, GreenBtnMob } from "../ui/Buttons";
import { Title } from "./Title";

import { newsCardData } from "@/lib/database/newsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const News = () => {
  return (
    <>
      <div className="container hidden min-[380px]:block w-full">
        <header className="flex items-center mb-[43px] justify-between">
          <Title text="Новости" />
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

      {/* Mobile */}

      <div className="container min-[380px]:hidden w-full">
        <header className="flex items-center min-[380px]:mb-[43px] mb-5 justify-between">
          <Title text="Новости" />
        </header>

        <div className="mb-[35px]">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
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
          <GreenBtnMob text="Все новости" />
        </footer>
      </div>
    </>
  );
};
