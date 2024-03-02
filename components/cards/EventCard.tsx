import React from "react";
import Image from "next/image";
import clsx from "clsx";

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
  dark = false,
}: EventCardProps) => {
  return (
    <div
      className={clsx(
        "bg-bgWhite p-[60px] rounded-[2px] w-full drop-shadow-md",
        { "bg-navyBlue text-gray": dark }
      )}
    >
      <div className="flex items-start gap-x-[33px]">
        <Image src={img} width={150} height={150} alt="Event Image" />
        <div className="flex flex-col items-start gap-x-[25px] max-w-[650px]">
          <p className="text-[12px] text-gray mb-[25px]">{suptitle}</p>
          <h3
            className={clsx("text-[21px] mb-[15px]", {
              "text-bgWhite": dark,
              "text-green": !dark,
            })}
          >
            {title}
          </h3>
          <p
            className={clsx("text-[16px] mb-[25px] leading-snug", {
              "text-gray2": !dark,
              "text-gray4": dark,
            })}
          >
            {text}
          </p>
          <p className="uppercase text-gray mb-[10px] text-[10px]">
            {organizer}
          </p>
          <p className="text-gray text-extraSm">{footerText}</p>
        </div>
        <div className="flex flex-col items-start gap-y-[20px]">
          <p
            className={clsx("text-lg font-bold", {
              "text-red": !dark,
              "text-lightYellow": dark,
            })}
          >
            {date}
          </p>
          <div className="flex gap-x-[10px]">
            <Image src={calendarImg} alt="calendar" />
            <p className="text-gray">{calendar}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
