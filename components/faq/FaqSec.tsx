"use client";

import React from "react";
import { v4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Radio } from "../ui/Radio";
import { selectFaq, setFaqStatus, setFaqTitle } from "@/redux/slices/faqSlice";
import { Members } from "./Members";
import { All } from "./All";
import { Visitors } from "./Visitors";
import { Pathnames } from "../page/Pathnames";
import { Title } from "../home/Title";

export const radio = [
  { name: "Все", id: "all" },
  { name: "Посетителям", id: "visitors" },
  { name: "Участникам", id: "members" },
];

export const FaqSec = () => {
  const dispatch = useAppDispatch();
  const { faqStatus, faqTitle } = useAppSelector(selectFaq);

  const changeRadio = (name: string) => {
    dispatch(setFaqStatus(name));
  };

  const onTitle = (name: string) => {
    if (faqTitle === name) dispatch(setFaqTitle(""));
    else dispatch(setFaqTitle(name));
  };

  return (
    <div className="container flex flex-col items-start pt-[20px] mb-[100px]">
      <div className="mb-[24px]">
        <Pathnames sort="faq" />
      </div>
      <Title text="«Вопросы-ответы»" />
      <div className="flex items-center mob:mt-6 mt-10 mob:gap-[20px] gap-10 mb-[48px]">
        {radio.map((item) => (
          <div key={v4()}>
            <Radio
              changeRadio={changeRadio}
              text={item.name}
              id={item.id}
              active={faqStatus === item.id}
            />
          </div>
        ))}
      </div>
      {faqStatus === "all" && <All />}
      {faqStatus === "visitors" && <Visitors />}
      {faqStatus === "members" && <Members />}
    </div>
  );
};
