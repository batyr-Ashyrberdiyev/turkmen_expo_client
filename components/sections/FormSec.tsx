import React from "react";

import { BidDrop } from "../ui/BidDrop";

export const FormSec = () => {
  return (
    <form action="" className="w-full max-w-[538px]">
      <div className="">
        <BidDrop />
      </div>

      <div className="flex flex-col items-start gap-[24px]">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-[15px]">
            Название сайта
            <span className="text-lightRed">*</span>
          </label>
          <input
            defaultValue={""}
            type="text"
            id="name"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="siteUrl" className="mb-[15px]">
            Сайт
          </label>
          <input
            defaultValue={""}
            type="text"
            id="siteUrl"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="phone" className="mb-[15px]">
            Телефон
            <span className="text-lightRed">*</span>
          </label>
          <input
            defaultValue={""}
            type="text"
            id="phone"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-[15px]">
            E-mail
            <span className="text-lightRed">*</span>
          </label>
          <input
            defaultValue={""}
            type="email"
            id="email"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="space" className="mb-[15px]">
            Требуемая площадь, м2
          </label>
          <input
            defaultValue={""}
            type="text"
            id="space"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="area" className="mb-[15px]">
            Демонстрируемая продукция / оборудование / услуги
          </label>
          <textarea
            className="bid-input"
            name="area"
            id="area"
            cols={30}
            rows={5}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="person" className="mb-[15px]">
            Контактное лицо (Ф.И.О)
            <span className="text-lightRed">*</span>
          </label>
          <input
            defaultValue={""}
            type="text"
            id="person"
            className="bid-input"
          />
        </div>
      </div>
    </form>
  );
};
