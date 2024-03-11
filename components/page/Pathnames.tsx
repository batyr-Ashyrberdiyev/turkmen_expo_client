"use client";

import React from "react";
import Link from "next/link";

import { topMenu } from "@/lib/database/pathnames";

export const Pathnames = ({ sort }: { sort: string }) => {
  return (
    <div className="text-[12px] text-gray4">
      <Link href={"/"}>Главная</Link> / О компании / Коротко о нас
    </div>
  );
};
