"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { EventCard } from "../EventCard";
import { Button } from "../ui/Button";
import { eventCardData } from "@/lib/data";

export const Events = () => {
  const [openCards, setOpenCards] = React.useState<boolean>(false);

  const onEventBtn = () => {
    setOpenCards(!openCards);
  };

  return (
    <div className="container">
      <h2 className="text-extra mb-[40px]">Ближайшие выставки и мероприятия</h2>
      <div className="mb-[158px] flex flex-col items-center gap-y-[10px]">
        {openCards
          ? eventCardData
              .filter((item) => item.id === 1 || item.id === 2)
              .map((item) => <EventCard key={item.id} {...item} />)
          : eventCardData.map((item) => <EventCard key={item.id} {...item} />)}

        <Button
          onEventBtn={onEventBtn}
          text={openCards ? "Показать ещё" : "Скрыть"}
          mt="mt-[25px]"
        />
      </div>
    </div>
  );
};
