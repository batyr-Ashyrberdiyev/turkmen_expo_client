import { contactCardData, roadCardData } from "@/lib/data";
import React from "react";
import Image from "next/image";

export const Services = () => {
  return (
    <div className="container flex gap-x-[40px] items-center">
      <div className="flex flex-col items-start gap-x-[20px] w-1/2">
        <h3 className="text-[21px] text-[#B0E6A1] uppercase mb-[20px]">
          как добраться
        </h3>
        <div className="flex flex-col gap-y-[20px] w-full">
          {roadCardData.map((item) => (
            <div className="bg-white px-[40px] py-[20px] text-black rounded-[2px]">
              <div className="flex items-center gap-x-[40px]">
                <Image src={item.icon} alt="icon" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start gap-x-[20px] w-1/2">
        <h3 className="text-[21px] text-[#FFD288] uppercase mb-[20px]">
          контакты
        </h3>
        <div className="flex flex-col gap-y-[20px] w-full">
          {contactCardData.map((item) => (
            <div className="bg-white px-[40px] py-[20px] text-black rounded-[2px] ">
              <div className="flex items-center gap-x-[40px]">
                <Image src={item.icon} alt="icon" />
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
