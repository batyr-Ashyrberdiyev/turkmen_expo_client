"use client";

import clsx from "clsx";
import React from "react";

interface Props {
  fill?: boolean;
}

export const Radio = ({ fill }: Props) => {
  return (
    <div className="w-[16px] h-[16px] p-[3px] rounded-full border-[1px] border-navyBlue">
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
    <div className="w-[16px] h-[16px] rounded-sm border-[1px] border-navyBlue">
      <div
        className={clsx(
          "w-full h-full rounded-sm opacity-0 bg-navyBlue  transition-all",
          {
            "opacity-100": fill,
          }
        )}
      ></div>
    </div>
  );
};
