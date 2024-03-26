import React from "react";
import Image from "next/image";
import clsx from "clsx";
import "@/app/styles/hover.css";

import calendarImg from "@/public/assets/icons/calendar.svg";
import { EventCardProps } from "@/lib/types";
import Link from "next/link";

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
    <>
      <Link href={"/calendar/event"}>
        <div
          className={clsx(
            "bg-bgWhite hidden mob:block p-[5%] rounded-[2px] cursor-pointer transition-all w-full greenBtnShadow hover:hover-shadow",
            {
              "bg-navyBlue text-gray": dark,
            }
          )}
        >
          <div className="flex items-start gap-x-[33px]">
            <Image src={img} width={150} height={150} alt="Event Image" />
            <div className="flex flex-col items-start gap-x-[25px] max-w-[683px]">
              <p className="text-[12px] text-gray mb-[25px]">{suptitle}</p>
              <h3
                className={clsx(
                  "text-[21px] mb-[15px] font-bold leading-[100%]",
                  {
                    "text-bgWhite": dark,
                    "text-green": !dark,
                  }
                )}
              >
                {title}
              </h3>
              <p
                className={clsx("text-[16px] mb-[25px] leading-[150%]", {
                  "text-gray2": !dark,
                  "text-gray4": dark,
                })}
              >
                {text}
              </p>
              <p className="uppercase text-gray mb-[10px] text-[10px]">
                {organizer}
              </p>
              <p className="text-gray text-extraSm leading-[125%]">
                {footerText}
              </p>
            </div>
            <div className="flex min-w-[200px] flex-col items-start gap-y-[20px]">
              <p
                className={clsx("text-lg font-semibold", {
                  "text-red": !dark,
                  "text-lightYellow": dark,
                })}
              >
                {date}
              </p>
              <div className="flex gap-x-[10px]">
                <Image src={calendarImg} alt="calendar" />
                <p className="text-gray leading-[]">{calendar}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* //Mobile */}
      <Link href={"/calendar/event"}>
        <div
          className={clsx(
            "mob:hidden bg-bgWhite px-4 py-6 rounded-[2px] cursor-pointer transition-all greenBtnShadow",
            {
              "bg-navyBlue text-gray": dark,
            }
          )}
        >
          <div className="flex-col items-start gap-x-[33px]">
            <div className="flex flex-col items-start gap-[10px]">
              <div className="border-b-[1px] border-[#DFE9F2] w-full pb-[20px]">
                <p
                  className={clsx(
                    "text-[16px] leading-[125%] font-semibold mb-[10px]",
                    {
                      "text-red": !dark,
                      "text-lightYellow": dark,
                    }
                  )}
                >
                  {date}
                </p>
                <div className="flex items-center gap-x-[10px]">
                  <Image src={calendarImg} alt="calendar" />
                  <p className="text-gray leading-[130%]">{calendar}</p>
                </div>
              </div>

              <Image
                src={img}
                width={150}
                height={150}
                alt="Event Image"
                className="mx-auto"
              />
              <div className="flex flex-col items-start gap-x-[25px] max-w-[683px]">
                <p className="text-[12px] uppercase text-gray mb-[10px]">
                  {suptitle}
                </p>
                <h3
                  className={clsx(
                    "text-[21px] mb-[10px] font-bold leading-[115%]",
                    {
                      "text-bgWhite": dark,
                      "text-green": !dark,
                    }
                  )}
                >
                  {title}
                </h3>
                <p
                  className={clsx("text-[14px] mb-[10px] leading-[130%]", {
                    "text-black": !dark,
                    "text-gray4": dark,
                  })}
                >
                  {text}
                </p>
                <p className="uppercase text-gray mb-[5px] text-[10px]">
                  {organizer}
                </p>
                <p className="text-gray text-[12px] leading-[100%]">
                  {footerText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
