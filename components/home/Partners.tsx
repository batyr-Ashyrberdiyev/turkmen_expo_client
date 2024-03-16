import React from "react";
import Image from "next/image";
import { v4 } from "uuid";

import { partnersData } from "@/lib/database/homeInfoData";

export const Partners = () => {
  return (
    <div className="container">
      <h2 className="text-extra mb-[55px] font-semibold leading-[100%]">
        Партнёры
      </h2>
      <div className="flex items-center justify-between flex-wrap">
        {partnersData.map((logo) => (
          <Image key={v4()} src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
};
