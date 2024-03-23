"use client";

import clsx from "clsx";
import React from "react";
import Image from "next/image";

import check from "@/public/assets/icons/check.svg";

interface Props {
  fill?: boolean;
}

export const Radio = ({ fill }: Props) => {
  return (
    <div className="sm:w-[16px] w-[12px] sm:h-[16px] h-[12px] p-[2px] sm:p-[3px] rounded-full border-[1px] border-navyBlue">
      <div
        className={clsx(
          "w-full h-full rounded-full opacity-0 bg-green transition-all",
          {
            "opacity-100": fill,
          }
        )}
      ></div>
    </div>
  );
};

export const Checkbox = ({ fill }: Props) => {
  return (
    <div className="w-[16px] h-[16px] rounded-sm p-[4px] border-[1px] border-navyBlue">
      <div
        className={clsx(
          "w-full h-full rounded-sm opacity-0 bg-navyBlue transition-all"
        )}
      >
        <Image
          src={check}
          alt="checked"
          width={8}
          height={7}
          className={clsx("opacity-100", {})}
        />
      </div>
    </div>
  );
};
