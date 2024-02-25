"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector } from "@/redux/hooks";
import { selectHeader } from "@/redux/slices/headerSlice";

import telegram from "@/public/assets/icons/telegram.svg";
import rss from "@/public/assets/icons/rss.svg";
import vk from "@/public/assets/icons/vk.svg";

export const icons = [
  { title: telegram, link: "" },
  { title: vk, link: "" },
  { title: rss, link: "" },
];

export const Footer = () => {
  const { menu2, footerMenu, footerMenu2 } = useAppSelector(selectHeader);

  return (
    <div className="bg-darkBlue py-[40px]">
      <div className="container">
        <header className="flex items-start justify-between text-bgWhite text-sm mb-[80px]">
          <div className="flex items-start justify-between gap-x-[145px]">
            <div className="flex flex-col items-start gap-y-[5px]">
              {menu2.map((item) => (
                <Link key={uuidv4()} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-y-[5px]">
              {footerMenu.map((item) => (
                <Link key={uuidv4()} href={item.link}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-[39px] flex flex-col gap-y-[5px]">
              {footerMenu2.map((item) => (
                <p key={uuidv4()}>{item}</p>
              ))}
            </div>
            <p className="text-sm mb-[19px]">
              Подписка на новости «ТуркменЭкспо»
            </p>
            <div className="flex items-center gap-x-[10px]">
              <input
                type="email"
                placeholder="Ваш e-mail адрес"
                className="focus:outline-none placeholder:text-bgWhite px-[15px] py-[10px] bg-navyBlue2 border-bgWhite border-1 text-[12px] text-bgWhite"
              />
              <button type="submit" className="bg-navyBlue px-[15px] py-[10px]">
                Подписаться
              </button>
            </div>
          </div>
        </header>
        <footer className="text-bgWhite flex items-center justify-between pt-[10px] border-t-[1px] border-gray3">
          <p className="text-[10px]">
            © 2024 АО «ЭКСПОЦЕНТР» выставочная компания, выставки Москвы 2024
          </p>
          <div className="flex items-center gap-x-[10px]">
            {icons.map((item) => (
              <Link key={uuidv4()} href={item.link}>
                <Image src={item.title} alt={item.title} />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
