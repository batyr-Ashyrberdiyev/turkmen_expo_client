"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectHeader } from "@/redux/slices/headerSlice";

import logo from "@/public/assets/icons/logo.svg";
import search from "@/public/assets/icons/search.svg";

import { LangMenu } from "./ui/LangMenu";
import { Input } from "./ui/Input";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { menu, menu2 } = useAppSelector(selectHeader);

  return (
    <>
      <header className="bg-darkBlue text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="extraSm">Справочный центр: 993 (12) 34-56-78</p>
          <div>
            <div className="flex gap-x-[10px]">
              {menu.map((item, id) => (
                <Link key={id} href={item.link} className="px-[5px]">
                  {item.title}
                </Link>
              ))}
              <LangMenu />
              <Input />
            </div>
          </div>
        </div>
      </header>
      <footer className="bg-bgWhite text-black">
        <div className="container py-[17px] flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="logo" height={38} width={235} />
          </Link>
          <div className="flex items-center gap-x-[20px]">
            {menu2.map((item, id) => (
              <Link key={id} href={item.link} className="cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
