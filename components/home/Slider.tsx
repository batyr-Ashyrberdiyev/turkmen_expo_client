'use client';

import Image from 'next/image';
import { v4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Manipulation, Pagination, Parallax, Scrollbar } from 'swiper/modules';

import img from '@/public/assets/images/hero.png';

import 'swiper/css/pagination';

export const images = [img, img, img];

export default () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ type: 'progressbar', el: '.swiper-pagination' }}
      parallax
      speed={1500}
      autoplay={{ delay: 10000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {images.map((item) => (
        <SwiperSlide key={v4()}>
          <Image src={item} alt="Главная фотография" width={3920} height={2080} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination bg-green"></div>
    </Swiper>
  );
};
