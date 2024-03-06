"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";

import vk from "@/public/assets/icons/vk.svg";
import rss from "@/public/assets/icons/rss.svg";
import telegram from "@/public/assets/icons/telegram.svg";

import { footerInfo, footerMenu, footerMenu2 } from "@/lib/database/pathnames";

export const icons = [
  { title: telegram, link: "" },
  { title: vk, link: "" },
  { title: rss, link: "" },
];

export const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="bg-darkBlue py-[40px]">
      <div className="container">
        <header className="flex items-start justify-between text-bgWhite text-sm mb-[80px]">
          <div className="w-full max-w-[600px] flex items-start justify-between gap-x-[20px]">
            <div className="w-full max-w-[290px] flex flex-col items-start gap-y-[10px]">
              {footerMenu.map((item) => (
                <Link
                  key={uuidv4()}
                  href={item.link}
                  className={clsx("transition-all", {
                    "text-green hover:text-green hover:cursor-default":
                      item.link === pathname,
                    "hover:text-[#A3CCC7]": item.link === item.link,
                  })}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="w-full max-w-[290px] flex flex-col items-start gap-y-[10px]">
              {footerMenu2.map((item) => (
                <Link
                  key={uuidv4()}
                  href={item.link}
                  className={clsx("transition-all", {
                    "text-green hover:text-green hover:cursor-default":
                      item.link === pathname,
                    "hover:text-[#A3CCC7]": item.link === item.link,
                  })}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-[39px] flex flex-col gap-y-[10px]">
              {footerInfo.map((item) => (
                <p key={uuidv4()}>{item}</p>
              ))}
            </div>
            <form className="flex flex-col items-start gap-x-[10px]">
              <label htmlFor="footer" className="text-sm mb-[19px]">
                Подписка на новости «ТуркменЭкспо»
              </label>
              <div className="flex items-center gap-[10px]">
                <input
                  id="footer"
                  type="email"
                  placeholder="Ваш e-mail адрес"
                  className="focus:outline-none placeholder:text-bgWhite placeholder:text-[12px] px-[15px] py-[10px] bg-navyBlue2 border-bgWhite border-1 text-[12px] text-bgWhite"
                />
                <button
                  type="submit"
                  className="bg-navyBlue px-[15px] text-[12px] py-[10px]"
                >
                  Подписаться
                </button>
              </div>
            </form>
          </div>
        </header>
        <footer className="text-bgWhite flex items-center justify-between pt-[17px] border-t-[1px] border-gray3">
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
