"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 } from "uuid";

import ru from "@/public/assets/icons/header/ru.svg";
import en from "@/public/assets/icons/header/en.svg";
import tm from "@/public/assets/icons/header/tm.svg";
import arrow from "@/public/assets/icons/header/burger-arrow.svg";
import { headerMenu, headerMenu2 } from "@/lib/database/pathnames";

export const flags = [
  { name: "Tm", flag: tm },
  { name: "Ру", flag: ru },
  { name: "En", flag: en },
];

export const BurgerMenu = () => {
  return (
    <div className="bg-green absolute w-full z-[150] top-[74px] left-0 h-svh px-4 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        {headerMenu2.map((item) => (
          <Link
            href={item.link}
            key={v4()}
            className="cursor-pointer flex items-center justify-between"
          >
            <p className="text-[18px] leading-[135%]">{item.title}</p>
            {!item.one && <Image src={arrow} alt="стрелка" />}
          </Link>
        ))}
      </div>

      <hr className="border-bgWhite" />

      <div className="flex flex-col gap-5">
        {headerMenu.map((item) => (
          <Link
            className="cursor-pointer flex items-center justify-between"
            href={item.link}
          >
            <p>{item.title}</p>
            <Image src={arrow} alt="стрелка" width={20} height={20} />
          </Link>
        ))}
      </div>

      <div className="flex mx-auto items-center gap-10">
        {flags.map((item) => (
          <div className="flex items-center gap-[10px] cursor-pointer">
            <p className="leading-[140%]">{item.name}</p>
            <Image src={item.flag} alt="флаг" />
          </div>
        ))}
      </div>
    </div>
  );
};
