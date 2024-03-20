"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import logo from "@/public/assets/icons/header/logo.svg";
import search from "@/public/assets/icons/header/mob-search.svg";
import burger from "@/public/assets/icons/header/burger.svg";

import { LangMenu } from "../ui/LangMenu";
import { Input, InputMob } from "../home/Input";
import { headerMenu, headerMenu2 } from "@/lib/database/pathnames";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectInput, setInputStatus } from "@/redux/slices/inputSlice";

export const Header = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [active, setActive] = React.useState(false);

  return (
    <>
      <header className="bg-bgWhite md:hidden flex items-center justify-between px-4 py-6">
        <Image
          src={search}
          height={32}
          width={32}
          alt="поиск"
          className="cursor-pointer"
          onClick={() => setActive(true)}
        />

        <Link href={"/"}>
          <Image
            src={logo}
            height={24}
            width={160}
            alt="лого"
            className="cursor-pointer"
          />
        </Link>

        <Image
          src={burger}
          height={32}
          width={32}
          alt="меню"
          className="cursor-pointer"
        />
      </header>

      <div className="hidden md:flex flex-col">
        <div className="flex items-center bg-darkBlue text-white py-[12px] font-regular text-extraSm">
          <div className="container flex items-center justify-between">
            <p className="text-extraSm">Справочный центр: 993 (12) 34-56-78</p>
            <div className="flex items-center gap-[6px]">
              <div className="flex items-center gap-x-[20px]">
                {headerMenu.map((item) => (
                  <Link
                    key={v4()}
                    href={item.link}
                    className={clsx("leading-[130%] relative transition-al", {
                      "link-border-bottom cursor-default hover:after:bg-green":
                        item.link === pathname,
                      "hover:link-border-bottom hover:after:bg-[#738799]":
                        item.link === item.link,
                    })}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex gap-[10px]">
                <LangMenu />
                <Input />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bgWhite text-black">
          <div className="container py-[17px] flex items-center justify-between">
            <Link href="/">
              <Image src={logo} alt="logo" height={38} width={235} />
            </Link>
            <div className="flex items-center gap-x-[20px] font-medium">
              {headerMenu2.map((item) => (
                <Link key={v4()} href={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
