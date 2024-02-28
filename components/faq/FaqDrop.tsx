import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import arrow from "@/public/assets/icons/contact-arrow.svg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectFaq, setFaqTitle } from "@/redux/slices/faqSlice";
import { FaqText1, FaqText2 } from "./FaqText";
import {
  faqAll1,
  faqAll2,
  faqAll3,
  faqAll4,
  faqAll5,
  faqAll6,
  faqAll7,
  faqTitleAll,
} from "@/lib/database/faqData";

interface Props {
  item: string;
  changeDrop: (name: string) => void;
}

export const FaqDrop = ({ item, changeDrop }: Props) => {
  const dispatch = useAppDispatch();
  const { faqTitle, faqStatus } = useAppSelector(selectFaq);

  const onAllMenu = () => {
    if (item === faqTitle) {
      dispatch(setFaqTitle(faqTitle ? "" : item));
    } else {
      changeDrop(item);
    }
  };

  return (
    <div className="w-full">
      <div
        onClick={onAllMenu}
        className="w-full cursor-pointer flex items-center justify-between py-[20px] mb-[30px] border-t-navyBlue5 border-b-navyBlue border-y-[1px]"
      >
        <h3 className="text-[21px] font-semibold">{item}</h3>
        <Image
          src={arrow}
          alt="arrow"
          className={`rotate-[360deg] transition-all duration-300`}
        />
      </div>
      {item === faqTitle && (
        <div>
          {faqStatus === "all" &&
            faqTitle === faqTitleAll[0] &&
            faqAll1.map((obj) => <FaqText1 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[1] &&
            faqAll2.map((obj) => <FaqText1 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[4] &&
            faqAll5.map((obj) => <FaqText1 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[2] &&
            faqAll3.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[3] &&
            faqAll4.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[5] &&
            faqAll6.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[6] &&
            faqAll7.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}

          {faqStatus === "members" &&
            faqTitle === faqTitleAll[1] &&
            faqAll2.map((obj) => <FaqText1 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[4] &&
            faqAll5.map((obj) => <FaqText1 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[2] &&
            faqAll3.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[3] &&
            faqAll4.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[5] &&
            faqAll6.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
          {faqTitle === faqTitleAll[6] &&
            faqAll7.map((obj) => <FaqText2 key={uuidv4()} {...obj} />)}
        </div>
      )}
    </div>
  );
};
