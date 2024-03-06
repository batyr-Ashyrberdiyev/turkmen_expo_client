import clsx from "clsx";
import React from "react";

export const Radio = ({ hover }: { hover: boolean }) => {
  return (
    <div className="w-[16px] h-[16px] p-[3px] rounded-full border-[1px] border-navyBlue">
      <div className={clsx("w-full h-full rounded-full radio-hover", {})}></div>
    </div>
  );
};

export const Checkbox = () => {
  return (
    <div className="w-[16px] h-[16px] rounded-sm border-[1px] border-navyBlue">
      <div className="w-full h-full"></div>
    </div>
  );
};
