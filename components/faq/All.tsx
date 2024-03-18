"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { selectFaq, setFaqTitle } from "@/redux/slices/faqSlice";
import { Select } from "./Select";

export const All = () => {
  return <Select all />;
};
