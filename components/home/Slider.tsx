"use client";

import React from "react";
import Image from "next/image";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import img from "@/public/assets/images/hero.png";

import "swiper/css/pagination";

export const images = [img, img, img];

export default () => {
  const progressCircle = React.useRef<SVGSVGElement>(null);
  const progressContent = React.useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (
    s: SwiperCore,
    time: number,
    progress: number
  ) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      pagination={{ type: "fraction" }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      parallax
      loop
      speed={1500}
      autoplay={{ delay: 2000 }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((item) => (
        <SwiperSlide key={v4()}>
          <Image
            src={item}
            alt="Главная фотография"
            width={3920}
            height={2080}
          />
        </SwiperSlide>
      ))}
      <div className="w-[63px] h-[3px] rounded-3xl bg-green" slot=""></div>
    </Swiper>
  );
};
