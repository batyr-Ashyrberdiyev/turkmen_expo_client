"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { v4 as uuidv4 } from "uuid";
import { selectHome, setActiveTitle } from "@/redux/slices/homeSlice";
import { selectHeader } from "@/redux/slices/headerSlice";
import { usePathname } from "next/navigation";

export const PageLayout = () => {
  const dispatch = useAppDispatch();
  const { activeTitle } = useAppSelector(selectHome);
  const { menu } = useAppSelector(selectHeader);
  const pathname = usePathname();

  return (
    <div className="mb-[24px]">
      <p className="text-[12px] mb-[24px]">
        Главная / О компании / Коротко о нас
      </p>
      {menu
        .filter((item) => item.title === activeTitle)
        .map((name) => (
          <h2 key={uuidv4()} className="text-extra font-semibold">
            {name.title}
          </h2>
        ))}
    </div>
  );
};
