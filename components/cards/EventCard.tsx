import React from "react";
import Image from "next/image";

import calendarImg from "@/public/assets/icons/calendar.svg";
import { EventCardProps } from "@/lib/types";

export const EventCard = ({
  img,
  suptitle,
  title,
  text,
  footerText,
  calendar,
  organizer,
  date,
}: EventCardProps) => {
  return (
    <div className="bg-bgWhite p-[60px] rounded-[2px] w-full shadow-sm">
      <div className="flex items-start gap-x-[33px]">
        <Image src={img} width={150} height={150} alt="Event Image" />
        <div className="flex flex-col items-start gap-x-[25px] max-w-[650px]">
          <p className="text-[12px] text-gray mb-[25px]">{suptitle}</p>
          <h3 className="text-[21px] text-green mb-[15px]">{title}</h3>
          <p className="text-[16px] text-gray2 mb-[25px] leading-snug">
            {text}
          </p>
          <p className="uppercase text-gray mb-[10px] text-[10px]">
            {organizer}
          </p>
          <p className="text-gray text-extraSm">{footerText}</p>
        </div>
        <div className="flex flex-col items-start gap-y-[20px]">
          <p className="text-lg text-red font-bold">{date}</p>
          <div className="flex gap-x-[10px]">
            <Image src={calendarImg} alt="calendar" />
            <p className="text-gray">{calendar}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
