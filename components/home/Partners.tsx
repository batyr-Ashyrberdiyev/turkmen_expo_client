"use client";

import React from "react";
import Image from "next/image";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

import { partnersData } from "@/lib/database/homeInfoData";

import { Title } from "./Title";
import { Autoplay, Pagination } from "swiper/modules";

export const Partners = () => {
  return (
    <>
      <div className="container">
        <div className="mb-[40px]">
          <Title text="Партнёры" />
        </div>

        <div className="flex items-center flex-wrap">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop
            slidesPerView={4}
            autoplay={{ delay: 0 }}
            spaceBetween={30}
            speed={10000}
            pagination={{ type: "bullets", el: ".swiper-pagination" }}
          >
            {partnersData.map((logo) => (
              <SwiperSlide>
                <Image
                  key={v4()}
                  height={63}
                  width={148}
                  src={logo}
                  alt="logo"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile */}

      {/* <div className="lg:hidden container">
        <h2 className="text-extra mb-[55px] font-semibold leading-[100%]">
          Партнёры
        </h2>
        <div className="flex items-center justify-between flex-wrap">
          {partnersData.map((logo) => (
            <Image key={v4()} src={logo} alt="logo" />
          ))}
        </div>
      </div> */}
    </>
  );
};
