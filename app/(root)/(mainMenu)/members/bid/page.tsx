import React from "react";

import { FormSec } from "@/components/sections/FormSec";

const Bid = () => {
  return (
    <div className="pl-[30px] h-full w-full">
      <div className="container w-full flex flex-col items-start pt-[20px] mb-[100px]">
        <p className="text-[12px] mb-[24px] text-gray4">
          Главная / Участникам / Онлайн заявка для участников
        </p>
        <h2 className="text-extra font-semibold mb-[24px]">
          Выстовочная деятельность
        </h2>
        <FormSec />
      </div>
    </div>
  );
};

export default Bid;
