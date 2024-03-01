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
          <>
            <p className="text-bgWhite mb-[12px] text-[16px] font-bold">
              {item.pathname}
            </p>
            <div className="flex flex-col items-start gap-y-[10px]">
              <div className="flex flex-col gap-[10px]">
                {item.info.map((obj) => (
                  <Link
                    href={obj.link}
                    className={clsx("cursor-pointer py-1 ml-[16px]", {
                      "text-green": obj.link === pathname,
                    })}
                    key={uuidv4()}
                  >
                    {obj.title}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ))}
    </div>
  );
};
