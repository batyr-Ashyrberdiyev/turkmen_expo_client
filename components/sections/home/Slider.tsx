'use client';

import Image from 'next/image';
import { v4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';

import img from '@/public/assets/images/hero.png';

import 'swiper/css/scrollbar';

export const images = [img, img, img];

export default () => {
  return (
    <Swiper
      modules={[Scrollbar, Pagination, Autoplay]}
      slidesPerView={1}
      scrollbar={{ draggable: true, el: '.swiper-scrollbar' }}
      pagination
      speed={1500}
      autoplay={{ delay: 10000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {images.map((item) => (
        <SwiperSlide key={v4()}>
          <Image src={item} alt="Главная фотография" width={1920} height={1080} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
