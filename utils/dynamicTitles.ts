"use client";

import { useAppDispatch } from "@/redux/hooks";
import { usePathname } from "next/navigation";
import { setActiveTitle } from "@/redux/slices/homeSlice";

export const setTitle = () => {
  const pathame = usePathname();
  const dispatch = useAppDispatch();

  switch (pathame) {
    case "/company/aboutus":
      dispatch(setActiveTitle("Коротко о нас"));
    case "/members":
      dispatch(setActiveTitle("Участникам"));
  }
};
