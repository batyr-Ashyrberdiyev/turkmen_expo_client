"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import add from "@/public/assets/icons/faq/add.svg";
import minus from "@/public/assets/icons/faq/minus.svg";
import openIcon from "@/public/assets/icons/contact-arrow.svg";

import { faqData } from "@/lib/database/faqData";
import { selectFaq, setFaqInfo, setFaqTitle } from "@/redux/slices/faqSlice";
import PlusDrop from "./PlusDrop";

interface Props {
  visitors?: boolean;
  members?: boolean;
  all?: boolean;
}

export const Select = ({
  visitors = false,
  members = false,
  all = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const { faqTitle, faqInfo } = useAppSelector(selectFaq);

  const [openItems, setOpenItems] = React.useState<string[]>([]);
  const [openTitles, setOpenTitles] = React.useState<string[]>([]);

  const onTitle = (name: string) => {
    if (openTitles.includes(name)) {
      setOpenTitles(openTitles.filter((item) => item !== name));
    } else {
      setOpenTitles((prev) => [...prev, name]);
    }
  };

  const onText = (name: string) => {
    if (openItems.includes(name)) {
      setOpenItems(openItems.filter((item) => item !== name));
    } else {
      setOpenItems((prev) => [...prev, name]);
    }
  };

  return (
    <div className="w-full">
      {faqData
        .filter(
          (item) =>
            (visitors && item.visitors) ||
            (members && item.members) ||
            (all && item)
        )
        .map((item) => (
          <div key={v4()} className="w-full">
            <div
              onClick={() => onTitle(item.title)}
              className={clsx(
                "w-full flex items-center justify-between border-y-[1px] border-y-navyBlue cursor-pointer",
                {
                  "border-t-navyBlue5": faqTitle === item.title,
                }
              )}
            >
              <h2 className="text-[21px] leading-[100%] font-semibold py-[20px]">
                {item.title}
              </h2>
              <Image
                src={openIcon}
                alt="arrow"
                className={clsx("rotate-[180deg] transition-all", {
                  "rotate-[360deg]": openTitles.includes(item.title || ""),
                })}
              />
            </div>
            <div className="flex flex-col gap-y-[20px] pb-[40px] w-full max-w-[1000px]">
              {openTitles.includes(item.title || "") &&
                item.faqAll.map((obj) => (
                  <div
                    key={v4()}
                    className="text-gray4 px-[40px] first-of-type:pt-[30px] flex flex-col items-start gap-y-[16px] leading-[1.5]"
                  >
                    <div
                      onClick={() => setFaqInfo("")}
                      className="flex items-center gap-x-[10px] cursor-pointer"
                    >
                      {!item.wifi && (
                        <Image
                          src={
                            openItems.includes(obj.title || "") ? minus : add
                          }
                          width={20}
                          height={20}
                          alt="button"
                        />
                      )}
                      <h4
                        onClick={() => {
                          obj.title && onText(obj.title);
                        }}
                        className="text-[16px] text-bgWhite"
                      >
                        {obj.title}
                      </h4>
                    </div>
                    {openItems.includes(obj.title || "") && (
                      <PlusDrop {...obj} />
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};
