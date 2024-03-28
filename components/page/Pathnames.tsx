"use client";

import React from "react";
import Link from "next/link";

import { topMenu } from "@/lib/database/pathnames";
import { v4 } from "uuid";

export const Pathnames = ({ sort }: { sort: string }) => {
  return (
    <div className="text-[12px] text-gray4 flex items-center mob:mb-6 mb-5">
      <Link href={"/"}>{"Главная "}</Link>
      {topMenu
        .filter((item) => item.path === sort)
        .map((obj) =>
          obj.links.map((item) => <p key={v4()}>{item.default}</p>)
        )}
    </div>
  );
};
