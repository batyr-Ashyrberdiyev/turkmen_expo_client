"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import logo from "@/public/assets/icons/logo.svg";

import { LangMenu } from "./ui/LangMenu";
import { Input } from "./ui/Input";
import { headerMenu, headerMenu2 } from "@/lib/database/pathnames";

export const Header = () => {
  return (
    <header className="">
      <div className="flex items-center bg-darkBlue text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="extraSm">Справочный центр: 993 (12) 34-56-78</p>
          <div>
            <div className="flex items-center gap-x-[10px]">
              {headerMenu.map((item) => (
                <Link key={uuidv4()} href={item.link} className="px-[5px]">
                  {item.title}
                </Link>
              ))}
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
          <div className="flex items-center gap-x-[20px]">
            {headerMenu2.map((item, id) => (
              <Link key={uuidv4()} href={item.link} className="cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
