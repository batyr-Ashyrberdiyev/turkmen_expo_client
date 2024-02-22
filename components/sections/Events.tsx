import React from "react";

import { EventCard } from "../EventCard";
import { Button } from "../ui/Button";
import { eventCardData } from "@/lib/data";

export const Events = () => {
  return (
    <div className="container">
      <h2 className="text-extra mb-[40px]">Ближайшие выставки и мероприятия</h2>
      <div className="mb-[158px] flex flex-col items-center gap-y-[10px]">
        {eventCardData.map((item) => (
          <EventCard {...item} />
        ))}

        <Button text="Показать ещё" mt="mt-[25px]" />
      </div>
    </div>
  );
};
