"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { usePathname } from "next/navigation";

import { sidebarData } from "@/lib/database/pathnames";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-start gap-y-[12px]">
      {sidebarData
        .filter(
          (obj) =>
            (pathname === "/company/aboutus" && obj.company) ||
            (pathname === "/members" && obj.members) ||
            (pathname === "/members/bid" && obj.members)
        )
        .map((item) => (
          <div key={uuidv4()}>
            <p className="text-bgWhite mb-[16px] text-[16px] font-bold leading-[1.5]">
              {item.pathname}
            </p>
            <div className="flex flex-col items-start gap-y-[8px]">
              <div className="flex flex-col gap-[10px] px-[16px]">
                {item.info.map((obj) => (
                  <Link
                    href={obj.link}
                    className={clsx("cursor-pointer py-1", {
                      "text-green": obj.link === pathname,
                    })}
                    key={uuidv4()}
                  >
                    {obj.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
