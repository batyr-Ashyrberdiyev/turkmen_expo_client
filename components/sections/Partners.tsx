import React from "react";
import Image from "next/image";

import { partnersData } from "@/lib/database/homeInfoData";

export const Partners = () => {
  return (
    <div className="container">
      <h2 className="text-extra mb-[55px]">Партнёры</h2>
      <div className="flex items-center justify-between flex-wrap">
        {partnersData.map((logo) => (
          <Image src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
};
