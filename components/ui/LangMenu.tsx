"use client";

import React from "react";
import Image from "next/image";

import triangle from "@/public/assets/icons/arrow-menu.svg";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectHeader } from "@/redux/slices/headerSlice";
import { setActiveLang } from "@/redux/slices/headerSlice";

export const lang = ["Ру", "Tu", "En"];

export const LangMenu = () => {
  const dispatch = useAppDispatch();
  const { activeLang } = useAppSelector(selectHeader);
  const [active, setActive] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const setLang = (str: string) => {
    setActive(false);
    dispatch(setActiveLang(str));
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActive(false);
        setRotate(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={menuRef}
      className="cursor-pointer flex items-center gap-x-[20px]"
      onClick={() => {
        setActive(!active);
        setRotate(!rotate);
      }}
    >
      <div className="flex gap-x-[5px]">
        <p>{activeLang}</p>
        <Image
          src={triangle}
          alt="arrow"
          className={`${rotate && "rotate-180 "}transition-rotate duration-300`}
        />
      </div>
      {active && (
        <div className="absolute z-10 flex flex-col top-10 rounded-[2px] bg-gray2 text-bgWhite transition-all duration-300">
          {lang.map((item, id) => (
            <div
              onClick={() => setLang(item)}
              className={`${activeLang === item && "bg-darkBlue"} px-5 py-2`}
              key={id}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
