import React from "react";

import { BidForm } from "@/components/ui/BidForm";

import { Checkbox } from "@radix-ui/themes";
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
            action=""
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
            <BidForm star title="Название сайта" />
            <BidForm title="Сайт" />
            <BidForm star title="Телефон" />
            <BidForm star title="E-mail" type="email" />
            <BidForm title="Требуемая площадь, м2" />
            <label htmlFor="area">
              Демонстрируемая продукция / оборудование / услуги
            </label>
            <textarea
              className="bid-input"
              name="Демонстрируемая продукция / оборудование / услуги"
              id="area"
              cols={30}
              rows={5}
            />
            <BidForm star title="Контактное лицо (Ф.И.О.)" />
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
                <input id="radio1" type="radio" />
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
