"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector } from "@/redux/hooks";
import { selectHome } from "@/redux/slices/homeSlice";

import { aboutCompanyData } from "@/lib/database/pathnames";

export const Sidebar = () => {
  const { activeTitle } = useAppSelector(selectHome);

  return (
    <div className="flex flex-col items-start gap-y-[12px]">
      <p className="text-bgWhite mb-[12px] text-[16px] font-bold">
        {activeTitle}
      </p>
      <ul className="flex flex-col items-start gap-y-[10px]">
        {aboutCompanyData
          .filter((name) => name.title !== activeTitle)
          .map((item) => (
            <li className="cursor-pointer py-1 ml-[16px]" key={uuidv4()}>
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};
