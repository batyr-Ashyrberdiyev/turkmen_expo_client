"use client";

import React from "react";
import { Pathnames } from "./Pathnames";
import { Title } from "../home/Title";

interface Props {
  title: string;
  sortBy: string;
  children: React.ReactNode;
}

export const LayoutWithSidebar = ({ title, sortBy, children }: Props) => {
  return (
    <div className="flex flex-col mob:gap-6 gap-10 lg:mb-[100px] md:mb-[80px] mb-[60px] w-full">
      <div>
        <Pathnames sort={sortBy} />
        <Title text={title} />
      </div>
      {children}
    </div>
  );
};
