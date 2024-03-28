"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import { EventCard } from "../cards/EventCard";
import { GreenBtn, GreenBtnMob } from "../ui/Buttons";
import { eventCardData } from "@/lib/database/eventsData";

import "swiper/css";
import "swiper/css/pagination";
import "./styles/events.css";

import { Title } from "./Title";
import { Pagination } from "swiper/modules";

export const Events = () => {
  const [openCards, setOpenCards] = React.useState<boolean>(true);

  const onEventBtn = () => {
    setOpenCards(false);
  };

  return (
    <>
      <div className="container hidden mob:block">
        <div className="mb-10">
          <Title text="Ближайшие выставки и мероприятия" />
        </div>
        <div className="mb-[158px] w-full flex flex-col items-center gap-y-[10px]">
          {openCards
            ? eventCardData
                .filter((item) => item.id === 1 || item.id === 2)
                .map((item) => <EventCard key={v4()} {...item} />)
            : eventCardData.map((item) => <EventCard key={v4()} {...item} />)}

          <GreenBtn
            onEventBtn={onEventBtn}
            text={"Показать ещё"}
            mt="mt-[25px]"
          />
        </div>
      </div>

      {/* //Mobile */}

      <div className="mob:hidden container">
        <h2 className="text-[26px] mb-[40px] font-semibold leading-[115%]">
          Ближайшие выставки и мероприятия
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center gap-y-[10px]">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ type: "bullets", el: ".swiper-pagination" }}
            >
              {openCards &&
                eventCardData.map((item) => (
                  <SwiperSlide key={v4()} className="mb-[72px]">
                    <EventCard {...item} />
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination swiper-pagination-horizontal"></div>
            </Swiper>
          </div>
          <GreenBtnMob text={"Все мероприятия"} />
        </div>
      </div>
    </>
  );
};
