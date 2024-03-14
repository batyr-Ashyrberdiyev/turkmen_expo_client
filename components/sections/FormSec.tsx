"use client";

import React from "react";
import { z } from "zod";
import { v4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { BidDrop } from "../ui/Dropdown";
import {
  selectBid,
  setBidStatus,
  setRadioStatus,
} from "@/redux/slices/bidSlice";
import { BidRadio } from "../bid/BidRadio";

export const formRadio = [
  { name: "Оборудованная", id: "equipped" },
  { name: "Необорудованная", id: "unequipped" },
];

export const phoneMail = ["телефон", "E-mail"];

export const exhibitions = [
  "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
  "ВЫСТАВКА-ЯРМАРКА «ВСЕ ДЛЯ ДЕТЕЙ»",
];

const schema = z.object({
  company: z.string().nonempty(),
  site: z.string().optional(),
  phone: z.number(),
  email: z.string().email(),
  space: z.string().optional(),
  area: z.string().optional(),
  bio: z.string().nonempty(),
  radio: z.boolean(),
  checkbox: z.boolean(),
});

type FormFields = z.infer<typeof schema>;

export const FormSec = () => {
  const dispatch = useAppDispatch();
  const { radioStatus, bidStatus } = useAppSelector(selectBid);

  const setStatus = (name: string) => {
    dispatch(setRadioStatus(name));
  };

  const methods = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const submitData: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  const changeRadio = (name: string) => {
    dispatch(setRadioStatus(name));
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-[538px]"
        onSubmit={methods.handleSubmit(submitData)}
      >
        <div className="flex flex-col items-start gap-[24px]">
          <div className="flex flex-col w-full">
            <BidDrop
              dropInfo={exhibitions}
              value="Выберите мероприятие из списка"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="mb-[15px] leading-[130%]">
              Название компании
              <span className="text-lightRed">*</span>
            </label>
            <input
              {...methods.register("company")}
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
              {...methods.register("site")}
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
              {...methods.register("phone")}
              type="text"
              id="phone"
              className="bid-input"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              {...methods.register("email")}
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
              {...methods.register("space")}
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
              {...methods.register("area")}
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
              {...methods.register("bio")}
              type="text"
              id="person"
              className="bid-input"
            />
          </div>

          <div className="w-full mb-[106px]">
            <BidDrop dropInfo={phoneMail} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col mb-[24px] gap-4">
              <h4 className="leading-[130%]">
                Экспозиционная площадь<span className="text-lightRed">*</span>
              </h4>
            </div>
            {formRadio.map((item) => (
              <BidRadio
                key={v4()}
                text={item.name}
                id={item.id}
                onRadio={changeRadio}
              />
            ))}
          </div>

          <div>
            <div
              onClick={() => dispatch(setBidStatus(!bidStatus))}
              className="flex items-center gap-[10px]"
            >
              {/* <Checkbox fill={bidStatus} /> */}
              <label className="cursor-pointer flex gap-[10px] leading-[125%] text-extraSm">
                <input
                  {...methods.register("checkbox")}
                  type="checkbox"
                  name="agree"
                  className="input-check"
                />
                <span className="span-check"></span>
                Даю согласие на обработку своих
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="py-[17px] w-full bg-green hover:bg-lightGreen transition-all rounded-[2px]"
          >
            Отправить
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

{
  /* <label
key={v4()}
className="leading-[125%] text-extraSm cursor-pointer flex gap-[10px]"
>
<input
  {...methods.register("radio")}
  type="radio"
  value={"Оборудованная"}
  name={"Оборудованная"}
  className="cursor-pointer radio-input"
/>
<span className="radio-span"></span>
Оборудованная
</label>

<label
key={v4()}
className="leading-[125%] text-extraSm cursor-pointer flex gap-[10px]"
>
<input
  {...methods.register("radio")}
  type="radio"
  value={"Необорудованная"}
  name={"Необорудованная"}
  className="cursor-pointer radio-input"
/>
<span className="radio-span"></span>
Необорудованная
</label> */
}
