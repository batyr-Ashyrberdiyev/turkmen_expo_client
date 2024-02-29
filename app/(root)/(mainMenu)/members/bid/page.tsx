import React from "react";

import { BidForm } from "@/components/ui/BidForm";

import { Radio } from "@/components/ui/Radio";

const Bid = () => {
  return (
    <div className="h-full w-full">
      <div className="container flex flex-col items-start pt-[20px] mb-[100px]">
        <p className="text-[12px] mb-[24px] text-gray4">
          Главная / Участникам / Онлайн заявка для участников
        </p>
        <h2 className="text-extra font-semibold mb-[24px]">
          Выстовочная деятельность
        </h2>
        <div className="">
          <form
            className="flex flex-col items-start gap-y-[18px] w-full"
            action="/"
          >
            <select className="bid-input" name="" id="">
              <option
                className="bid-option hover:bg-none"
                value="Выстовочная деятельность"
              >
                Выстовочная деятельность
              </option>
              <option className="bid-option" value="">
                Выстовочная деятельность
              </option>
            </select>
            <BidForm name="title" star text="Название сайта" />
            <BidForm name="sitename" text="Сайт" />
            <BidForm name="phone" star text="Телефон" />
            <BidForm name="email" star text="E-mail" type="email" />
            <BidForm name="space" text="Требуемая площадь, м2" />
            <BidForm name="person" star text="Контактное лицо (Ф.И.О.)" />
            <select className="bid-input" name="" id="">
              <option className="bid-input bg-transparent" value="">
                Выстовочная деятельность
              </option>
              <option className="bid-input" value="">
                Выстовочная деятельность
              </option>
            </select>
            <div className="flex flex-col gap-[15px]">
              <h4>Экспозицонная площадь*</h4>
              <div className="flex items-center gap-x-[10px] text-extraSm">
                <label htmlFor="radio1">Оборудованная</label>
              </div>
              <div className="flex items-center gap-x-[10px] text-extraSm">
                <label htmlFor="radio2">Необорудованная</label>
              </div>
            </div>
            <div className="">
              <h4>Даю согласие на обработку своих</h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bid;
