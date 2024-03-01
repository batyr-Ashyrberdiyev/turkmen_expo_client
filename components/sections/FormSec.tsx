"use client";

import React from "react";

import { BidDrop } from "../ui/BidDrop";
import clsx from "clsx";

export const FormSec = () => {
  const [radioActive, setRadioActive] = React.useState(false);
  const [radioActive2, setRadioActive2] = React.useState(false);

  const onRadio = () => {};

  return (
    <form className="w-full max-w-[538px]">
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

        <div className="w-full">
          <BidDrop />
        </div>

        <div className="w-full mb-[24px]">
          <div className="flex flex-col gap-[15px]">
            <h4>
              Экспозицонная площадь<span className="text-lightRed">*</span>
            </h4>
            <div className="flex-centers gap-[10px]">
              <div className="radio">
                <div
                  className={clsx("bg-green opacity-0 transition-all", {
                    "opacity-100": radioActive,
                  })}
                ></div>
              </div>
              <p className="text-extraSm">Оборудованная</p>
            </div>
            <div className="flex-centers gap-[10px]">
              <div className="radio">
                <div
                  className={clsx("bg-green opacity-0 transition-all", {
                    "opacity-100": radioActive,
                  })}
                ></div>
              </div>
              <p className="text-extraSm">Необорудованная</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex-centers gap-[10px]">
            <input type="checkbox" className=" bg-navyBlue"></input>
            <p className="text-extraSm">Даю согласие на обработку своих</p>
          </div>
        </div>

        <button
          type="submit"
          className="py-[17px] w-full bg-gray3 rounded-[2px]"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
