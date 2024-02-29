"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { selectFaq, setFaqTitle } from "@/redux/slices/faqSlice";
import { Select } from "./Select";

export const Visitors = () => {
  const dispatch = useAppDispatch();
  const { faqTitle } = useAppSelector(selectFaq);

  const onTitle = (name: string) => {
    if (faqTitle === name) dispatch(setFaqTitle(""));
    else dispatch(setFaqTitle(name));
  };

  return <Select onTitle={onTitle} visitors />;
};
