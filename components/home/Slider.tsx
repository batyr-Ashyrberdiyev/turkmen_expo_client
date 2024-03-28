'use client';

import React from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import img from '@/public/assets/images/hero.png';

import 'swiper/css/pagination';

export const images = [img, img, img];

export default () => {
  const progressCircle = React.useRef<SVGSVGElement>(null);
  // const progressContent = React.useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (s: SwiperCore, time: number, progress: number) => {
    if (progressCircle.current && progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', String(1 - progress));
      // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      slidesPerView={1}
      pagination={{ type: 'fraction' }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      loop
      speed={1500}
      autoplay={{ delay: 10000 }}>
      {images.map((item) => (
        <SwiperSlide key={v4()}>
          <Image src={item} alt="Главная фотография" width={3920} height={2080} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination swiper-pagination-horizontal swiper-pagination-fraction">
        <div className="autoplay-progress bg-bgWhite rounded-full" slot="container-end">
          <span className="swiper-pagination-current"></span>
          <svg ref={progressCircle}>
            <line viewBox="0 0 63 5" x1={0} x2={63}></line>
          </svg>
        </div>
      </div>
    </Swiper>
  );
};
