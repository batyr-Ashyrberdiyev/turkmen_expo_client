import React from "react";
import Image from "next/image";

import arrow from "@/public/assets/icons/arrow-menu.svg";

export const FaqDrop = () => {
  return (
    <div className="w-full">
      <div className="cursor-pointer flex items-center justify-between py-[20px] mb-[30px] border-t-navyBlue5 border-b-navyBlue border-y-[1px]">
        <h3 className="text-[21px] font-semibold"></h3>
        <Image
          src={arrow}
          alt="arrow"
          className={`rotate-[360deg] transition-all duration-300`}
        />
      </div>
    </div>
  );
};
