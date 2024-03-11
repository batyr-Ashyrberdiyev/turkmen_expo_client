"use client";

import React from "react";
import Link from "next/link";

import { topMenu } from "@/lib/database/pathnames";

export const Pathnames = ({ sort }: { sort: string }) => {
  return (
    <div className="text-[12px] text-gray4 flex items-center">
      <Link href={"/"}>Главная </Link>
      {topMenu
        .filter((item) => item.path === sort)
        .map((obj) => obj.links.map((item) => <p>{item.default}</p>))}
    </div>
  );
};
