"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 } from "uuid";
import { EventCard } from "../cards/EventCard";
import { GreenBtn, GreenBtnMob } from "../ui/Buttons";
import { eventCardData } from "@/lib/database/eventsData";

export const Events = () => {
  const [openCards, setOpenCards] = React.useState<boolean>(true);

  const onEventBtn = () => {
    setOpenCards(false);
  };

  return (
    <>
      <div className="container hidden lg:block">
        <h2 className="text-extra mb-[40px] font-semibold leading-[100%]">
          Ближайшие выставки и мероприятия
        </h2>
        <div className="mb-[158px] flex flex-col items-center gap-y-[10px]">
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

      <div className="lg:hidden container">
        <h2 className="text-[26px] mb-[40px] font-semibold leading-[115%]">
          Ближайшие выставки и мероприятия
        </h2>
        <div className="flex flex-col">
          <div className="flex items-center gap-y-[10px]">
            <Swiper
              pagination={{ type: "bullets", el: ".swiper-pagination" }}
              slidesPerView={2}
              spaceBetween={20}
            >
              {openCards &&
                eventCardData.map((item) => (
                  <SwiperSlide className="mb-[20px]">
                    <EventCard key={v4()} {...item} />
                  </SwiperSlide>
                ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
          <GreenBtnMob text={"Все мероприятия"} />
        </div>
      </div>
    </>
  );
};
