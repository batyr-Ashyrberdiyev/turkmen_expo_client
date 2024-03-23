import React from "react";

import { headerMenu, headerMenu2 } from "@/lib/database/pathnames";
import { v4 } from "uuid";
import Link from "next/link";

export const BurgerMenu = () => {
  return (
    <div className="bg-green absolute w-full z-[150] top-[74px] left-0 h-svh px-4 py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        {headerMenu2.map((item) => (
          <Link href={item.link} key={v4()} className="cursor-pointer">
            {item.title}
          </Link>
        ))}
      </div>

      <hr className=" border-bgWhite" />

      <div className="flex flex-col gap-5 cursor-pointer">
        {headerMenu.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
    </div>
  );
};
