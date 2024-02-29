"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  text: string;
  id: string;
  active: boolean;
  changeRadio: (name: string) => void;
}

export const Radio = ({ text, id, active, changeRadio }: Props) => {
  return (
    <div className="">
      <div
        className="flex items-center gap-[10px] cursor-pointer"
        onClick={() => changeRadio(id)}
      >
        <div className="p-[3px] rounded-full w-[16px] h-[16px] border-[1px] border-navyBlue cursor-pointer">
          <div
            className={clsx(
              "opacity-0 transition-all bg-green h-full w-full rounded-full",
              {
                "opacity-100": active,
              }
            )}
          ></div>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};
