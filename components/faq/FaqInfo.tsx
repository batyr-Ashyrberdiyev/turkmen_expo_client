import React from "react";
import { v4 as uuidv4 } from "uuid";

import { FaqDrop } from "./FaqDrop";
import {
  faqTitleAll,
  faqTitleMembers,
  faqTitleVisitors,
} from "@/lib/database/faqData";
import { setFaqTitle } from "@/redux/slices/faqSlice";
import { useAppDispatch } from "@/redux/hooks";

export const FaqInfo = ({ members = false, visitors = false, all = false }) => {
  const dispatch = useAppDispatch();

  const changeDrop = (name: string) => {
    dispatch(setFaqTitle(name));
  };

  return (
    <div className="w-full">
      {all &&
        faqTitleAll.map((item) => (
          <FaqDrop key={uuidv4()} item={item} changeDrop={changeDrop} />
        ))}
      {visitors &&
        faqTitleVisitors.map((item) => (
          <FaqDrop key={uuidv4()} item={item} changeDrop={changeDrop} />
        ))}
      {members &&
        faqTitleMembers.map((item) => (
          <FaqDrop key={uuidv4()} item={item} changeDrop={changeDrop} />
        ))}
    </div>
  );
};
