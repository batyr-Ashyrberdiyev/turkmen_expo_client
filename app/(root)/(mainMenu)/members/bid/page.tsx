import React from "react";

import { FormSec } from "@/components/sections/FormSec";

const Bid = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full flex flex-col items-start mb-[100px]">
        <p className="text-[12px] mb-[24px] text-gray4">
          Главная / Участникам / Онлайн заявка для участников
        </p>
        <h2 className="text-extra font-semibold mb-[24px] leading-[100%]">
          Выстовочная деятельность
        </h2>
        <FormSec />
      </div>
    </div>
  );
};

export default Bid;
