import React from "react";
import Image from "next/image";

import { NewsCardProps } from "@/lib/types";

export const NewsCard = ({ img, text, date }: NewsCardProps) => {
  return (
    <div className="bg-bgWhite">
      <Image src={img} width={290} height={185} alt="photo" />
      <div className="p-[25px]">
        <p className="text-extraSm text-gray mb-[10px]">{date}</p>
        <p className="text-green">{text}</p>
      </div>
    </div>
  );
};
