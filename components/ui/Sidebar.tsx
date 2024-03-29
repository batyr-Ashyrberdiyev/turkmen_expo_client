"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { sidebarData } from "@/lib/database/pathnames";
import { v4 } from "uuid";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-start gap-y-[12px] py-[20px] sticky top-0 left-0 overflow-hidden">
      {sidebarData
        .filter(
          (obj) =>
            (pathname === "/company/aboutus" && obj.company) ||
            (pathname === "/members" && obj.members) ||
            (pathname === "/members/bid" && obj.members) ||
            (pathname === "/news" && obj.news)
        )
        .map((item) => (
          <div key={v4()}>
            <p
              className={clsx(
                "text-bgWhite mb-[16px] text-[16px] font-bold leading-[1.5]"
              )}
            >
              {item.pathname}
            </p>
            <div className="flex flex-col items-start gap-y-[8px]">
              <div className="flex flex-col gap-[10px] px-[16px]">
                {item.info.map((obj) => (
                  <Link
                    href={obj.link}
                    className={clsx(
                      "cursor-pointer py-1 leading-[130%] transition-all hover:text-[#A3CCC7]",
                      {
                        "hover:text-green text-green hover:cursor-default":
                          obj.link === pathname,
                      }
                    )}
                    key={v4()}
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
