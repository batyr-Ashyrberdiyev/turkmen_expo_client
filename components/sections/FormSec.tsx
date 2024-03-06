"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Checkbox, Radio } from "../ui/InputTypes";
import { BidDrop } from "../ui/Dropdown";

export const FormSec = () => {
  const phoneMail = ["телефон", "E-mail"];
  const exhibiotns = [
    "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
    "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
  ];

  const [hover, setHover] = React.useState(false);

  const radioText = ["Оборудованная", "Необорудованная"];

  return (
    <form className="w-full max-w-[538px]">
      <div className="flex flex-col items-start gap-[24px]">
        <div className="flex flex-col w-full">
          <BidDrop dropInfo={exhibiotns} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-[15px] leading-[130%]">
            Название сайта
            <span className="text-lightRed">*</span>
          </label>
          <input type="text" id="name" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="siteUrl" className="mb-[15px] leading-[130%]">
            Сайт
          </label>
          <input type="text" id="siteUrl" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="phone" className="mb-[15px] leading-[130%]">
            Телефон
            <span className="text-lightRed">*</span>
          </label>
          <input type="text" id="phone" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-[15px] leading-[130%]">
            E-mail
            <span className="text-lightRed">*</span>
          </label>
          <input type="email" id="email" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="space" className="mb-[15px] leading-[130%]">
            Требуемая площадь, м2
          </label>
          <input type="text" id="space" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="area" className="mb-[15px] leading-[130%]">
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
          <label htmlFor="person" className="mb-[15px] leading-[130%]">
            Контактное лицо (Ф.И.О)
            <span className="text-lightRed">*</span>
          </label>
          <input type="text" id="person" className="bid-input" />
        </div>

        <div className="w-full mb-[106px]">
          <BidDrop dropInfo={phoneMail} />
        </div>

        <div className="flex flex-col mb-[24px] gap-4">
          <h4 className="leading-[130%]">
            Экспозиционная площадь<span className="text-lightRed">*</span>
          </h4>
          {radioText.map((item) => (
            <div className="flex radio-btn cursor-pointer items-center gap-[10px]">
              <Radio hover={hover} />
              <p className="leading-[125%] radio-hover text-extraSm">{item}</p>
            </div>
          ))}
        </div>

        <div className="">
          <div className="flex cursor-pointer items-center gap-[10px]">
            <Checkbox />
            <p>Даю согласие на обработку своих</p>
          </div>
        </div>

        <button
          disabled
          type="submit"
          className="py-[17px] w-full bg-gray3 rounded-[2px]"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
