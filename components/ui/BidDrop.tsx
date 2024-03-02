"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

import { v4 as uuidv4 } from "uuid";

import drop from "@/public/assets/icons/form-drop-icon.svg";

export const BidDrop = () => {
  const [title, setTitle] = React.useState("");
  const [active, setActive] = React.useState(false);
  const phoneMail = ["телефон", "E-mail"];
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
    <div className="">
      <div
        key={uuidv4()}
        onClick={() => setActive(!active)}
        className="flex cursor-pointer items-center justify-between bid-drop py-[15px] mb-[10px]"
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
      {active && (
        <div className="bg-navyBlue3 rounded-sm flex flex-col">
          {phoneMail.map((item) => (
            <div
              ref={dropRef}
              key={uuidv4()}
              onClick={() => onOption(item)}
              className={clsx("py-[15px] px-[12px] text-[14px] font-regular", {
                "hover:bg-green rounded-sm": item === item,
              })}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
