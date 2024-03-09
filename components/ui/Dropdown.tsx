"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { v4 } from "uuid";

import drop from "@/public/assets/icons/form-drop-icon.svg";

interface Props {
  dropInfo: string[];
}

export const BidDrop = ({ dropInfo }: Props) => {
  const [title, setTitle] = React.useState("");
  const [active, setActive] = React.useState(false);
  const dropRef = React.useRef<HTMLDivElement>(null);

  const onOption = (name: string) => {
    setActive(false);
    setTitle(name);
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <div
        key={v4()}
        onClick={() => {
          setActive(!active);
        }}
        className="h-[43px] flex cursor-pointer items-center justify-between bid-drop py-[15px] mb-[10px]"
      >
        <div>{title}</div>
        <Image
          src={drop}
          alt="arrow"
          className={clsx("transition-all", {
            "rotate-180": active,
          })}
        />
      </div>
      <div className="relative">
        {active && (
          <div className="bg-navyBlue3 rounded-sm flex flex-col absolute w-full shadow-sm">
            {dropInfo.map((item) => (
              <div
                key={v4()}
                onClick={() => onOption(item)}
                className={clsx(
                  "py-[15px] px-[12px] text-[14px] font-regular leading-[125%] transition-all",
                  {
                    "hover:bg-green rounded-sm": item === item,
                  }
                )}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
