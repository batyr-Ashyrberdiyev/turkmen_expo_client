import React from "react";
import Image from "next/image";

import { NewsCardProps } from "@/lib/types";

export const NewsCard = ({ img, text, date }: NewsCardProps) => {
  return (
    <div className="bg-bgWhite rounded-sm mob:max-w-[290px] w-full transition-all hover:hover-shadow cursor-pointer">
      <Image src={img} width={329} height={209} alt="photo" />
      <div className="p-[25px]">
        <p className="min-text-extraSm leading-[125%] text-gray mb-[10px]">
          {date}
        </p>
        <p className="text-green font-bold leading-[125%] mob:text-[16px] text-[21px]">
          {text}
        </p>
      </div>
    </div>
  );
};
