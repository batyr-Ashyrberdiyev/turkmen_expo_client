"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { selectFaq, setFaqTitle } from "@/redux/slices/faqSlice";
import { Select } from "./Select";

export const Members = () => {
  return <Select members />;
};
