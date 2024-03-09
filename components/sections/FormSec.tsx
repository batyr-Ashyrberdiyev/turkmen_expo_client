"use client";

import React from "react";
import { v4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { Checkbox, Radio } from "../ui/InputTypes";
import { BidDrop } from "../ui/Dropdown";
import {
  selectBid,
  setBidStatus,
  setRadioStatus,
} from "@/redux/slices/bidSlice";

export const formRadio = [
  { name: "Оборудованная", id: "equipped" },
  { name: "Необорудованная", id: "unequipped" },
];

interface FormFields {
  siteName: string;
  siteUrl: string;
  phone: number;
  email: string;
  space: string;
  area: string;
  bio: string;
}

export const FormSec = () => {
  const dispatch = useAppDispatch();
  const { radioStatus, bidStatus } = useAppSelector(selectBid);

  const phoneMail = ["телефон", "E-mail"];
  const exhibitions = [
    "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
    "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
  ];

  const setStatus = (name: string) => {
    dispatch(setRadioStatus(name));
  };

  const { register, handleSubmit } = useForm<FormFields>();

  const submitData: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className="w-full max-w-[538px]" onSubmit={handleSubmit(submitData)}>
      <div className="flex flex-col items-start gap-[24px]">
        <div className="flex flex-col w-full">
          <BidDrop dropInfo={exhibitions} />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-[15px] leading-[130%]">
            Название сайта
            <span className="text-lightRed">*</span>
          </label>
          <input
            {...(register("siteName"),
            {
              required: true,
            })}
            type="text"
            id="name"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="siteUrl" className="mb-[15px] leading-[130%]">
            Сайт
          </label>
          <input
            {...(register("siteUrl"),
            {
              required: true,
            })}
            type="text"
            id="siteUrl"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="phone" className="mb-[15px] leading-[130%]">
            Телефон
            <span className="text-lightRed">*</span>
          </label>
          <input
            {...(register("phone"),
            {
              required: true,
            })}
            type="text"
            id="phone"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            {...(register("email"),
            {
              required: true,
            })}
            htmlFor="email"
            className="mb-[15px] leading-[130%]"
          >
            E-mail
            <span className="text-lightRed">*</span>
          </label>
          <input type="email" id="email" className="bid-input" />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="space" className="mb-[15px] leading-[130%]">
            Требуемая площадь, м2
          </label>
          <input
            {...(register("space"),
            {
              required: true,
            })}
            type="text"
            id="space"
            className="bid-input"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="area" className="mb-[15px] leading-[130%]">
            Демонстрируемая продукция / оборудование / услуги
          </label>
          <textarea
            {...(register("area"),
            {
              required: true,
            })}
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
          <input
            {...(register("bio"),
            {
              required: true,
            })}
            type="text"
            id="person"
            className="bid-input"
          />
        </div>

        <div className="w-full mb-[106px]">
          <BidDrop dropInfo={phoneMail} />
        </div>

        <div className="flex flex-col mb-[24px] gap-4">
          <h4 className="leading-[130%]">
            Экспозиционная площадь<span className="text-lightRed">*</span>
          </h4>
          {formRadio.map((item) => (
            <div
              onClick={() => setStatus(item.id)}
              className="flex radio-btn cursor-pointer items-center gap-[10px]"
              key={v4()}
            >
              <Radio fill={item.id === radioStatus} />
              <p className="leading-[125%] radio-hover text-extraSm">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <div className="">
          <div
            onClick={() => dispatch(setBidStatus(!bidStatus))}
            className="flex cursor-pointer items-center gap-[10px]"
          >
            <Checkbox fill={bidStatus} />
            <p>Даю согласие на обработку своих</p>
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
