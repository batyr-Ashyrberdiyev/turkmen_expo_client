'use client';

import React from 'react';
import { v4 } from 'uuid';
import { EventCard } from '../cards/EventCard';
import { GreenBtn } from '../ui/Buttons';
import { eventCardData } from '@/lib/database/eventsData';

export const Events = () => {
  const [openCards, setOpenCards] = React.useState<boolean>(true);

  const onEventBtn = () => {
    setOpenCards(!openCards);
  };

  return (
    <div className="container">
      <h2 className="text-extra mb-[40px] font-semibold leading-[100%]">
        Ближайшие выставки и мероприятия
      </h2>
      <div className="mb-[158px] flex flex-col items-center gap-y-[10px]">
        {openCards
          ? eventCardData
              .filter((item) => item.id === 1 || item.id === 2)
              .map((item) => <EventCard key={v4()} {...item} />)
          : eventCardData.map((item) => <EventCard key={v4()} {...item} />)}

        <GreenBtn onEventBtn={onEventBtn} text={'Показать ещё'} mt="mt-[25px]" />
      </div>
    </div>
  );
};
