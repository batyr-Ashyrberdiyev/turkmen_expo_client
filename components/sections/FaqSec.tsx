"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Radio } from "../ui/Radio";
import { selectFaq, setStatus } from "@/redux/slices/faqSlice";
import { Members } from "../faq/Members";
import { All } from "../faq/All";
import { Visitors } from "../faq/Visitors";

export const radio = [
  { name: "Все", id: "all" },
  { name: "Посетителям", id: "visitors" },
  { name: "Участникам", id: "members" },
];

export const FaqSec = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(selectFaq);

  const changeRadio = (name: string) => {
    dispatch(setStatus(name));
  };

  return (
    <div className="container flex flex-col items-start pt-[20px] mb-[136px]">
      <p className="text-[12px] mb-[24px] text-gray4">Главная / FAQ</p>
      <h2 className="text-extra font-semibold mb-[48px]">«Вопросы и ответы»</h2>
      <div className="flex items-center gap-[20px] mb-[48px]">
        {radio.map((item) => (
          <div key={item.id}>
            <Radio
              changeRadio={changeRadio}
              key={uuidv4()}
              text={item.name}
              id={item.id}
              active={status === item.id}
            />
          </div>
        ))}
      </div>
      {(status === "all" && <All />) ||
        (status === "visitors" && <Visitors />) ||
        (status === "members" && <Members />)}
    </div>
  );
};
