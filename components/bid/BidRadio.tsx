import React from "react";

export const BidRadio = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-[10px] cursor-pointer">
      <div className="p-[3px] rounded-full w-[16px] h-[16px] border-[1px] border-navyBlue cursor-pointer">
        <div
          className={`transition-opacity opacity-0 ${"opacity-100"} bg-green h-full w-full rounded-full`}
        ></div>
      </div>
      <div>{text}</div>
    </div>
  );
};
