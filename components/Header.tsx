import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/icons/logo.svg";
import { headerMenu, headerMenu2 } from "@/lib/data";

export const Header = () => {
  return (
    <>
      <header className="bg-darkBlue text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="extraSm">Справочный центр: 993 (12) 34-56-78</p>
          <div className="flex gap-x-[20px]">
            {headerMenu.map((item) => (
              <Link href={item.link}>{item.title}</Link>
            ))}
          </div>
        </div>
      </header>
      <footer className="bg-bgWhite">
        <div className="container py-[17px] flex items-center justify-between">
          <Image src={logo} alt="logo" height={38} width={235} />
          <div className="flex items-center gap-x-[20px]">
            {headerMenu2.map((item) => (
              <Link href={item.link} className="cursor-pointer">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
