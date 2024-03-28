"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import search from "@/public/assets/icons/header/search.svg";
import searchMob from "@/public/assets/icons/header/mob-search.svg";
import close from "@/public/assets/icons/home/close-input.svg";

import { Radio } from "../bid/InputTypes";
import { GreenBtn } from "../ui/Buttons";
import { selectInput, setInputStatus } from "@/redux/slices/inputSlice";
import { v4 } from "uuid";
import {
  selectHeader,
  setBurgerMenu,
  setShowInput,
} from "@/redux/slices/headerSlice";

export const inputRadio = [
  { name: "Везде", id: "all" },
  { name: "В событиях", id: "events" },
  { name: "В новостях", id: "news" },
];

export const Input = ({ mob = false }: { mob?: boolean }) => {
  const dispatch = useAppDispatch();
  const { inputStatus } = useAppSelector(selectInput);
  const { showInput } = useAppSelector(selectHeader);

  const setStatus = (name: string) => {
    dispatch(setInputStatus(name));
  };

  const onSearch = () => {
    dispatch(setShowInput(!showInput));
    dispatch(setBurgerMenu(false));
  };

  const main = document.querySelector(".main");
  const wrapper = document.querySelector(".wrapper");

  useEffect(() => {
    main?.classList.add("overflow-hidden");
    wrapper?.classList.add("overflow-hidden");

    return () => {
      main?.classList.remove("overflow-hidden");
      wrapper?.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div className="cursor-pointer">
        <Image
          src={mob ? searchMob : search}
          height={mob ? 32 : 16}
          width={mob ? 32 : 16}
          alt="поиск"
          className="cursor-pointer"
          onClick={onSearch}
        />
      </div>
      {showInput && (
        <div
          className={`${
            mob ? "fixed top-[74px] bottom-0" : "absolute top-0"
          } left-0 w-full min-h-svh z-[1000] overflow-y-auto bg-blueBg`}
        >
          <div className="container">
            <div className="w-full flex justify-end mt-[40px]">
              <Image
                alt="close"
                className="cursor-pointer"
                onClick={() => dispatch(setShowInput(false))}
                src={close}
              />
            </div>
            <div
              className={`flex flex-col mt-[10vw] items-center w-full max-w-[566px] mx-auto`}
            >
              <div className="w-full mb-[24px]">
                <input
                  type="search"
                  placeholder="Что найти?"
                  className="p-3 w-full leading-[150%] placeholder:leading-[150%] placeholder:text-gray focus:outline-none rounded-sm bg-transparent border-[1px] border-[#BCC4CC]"
                />
              </div>

              <div className="flex items-center text-[12px] sm:text-[14px] gap-[40px] sm:gap-[48px] mb-[20px] md:mb-[2.5vw]">
                {inputRadio.map((item) => (
                  <div
                    onClick={() => setStatus(item.id)}
                    className="flex cursor-pointer items-center gap-[10px]"
                    key={v4()}
                  >
                    <Radio fill={inputStatus === item.id} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <GreenBtn text={"Найти"} px />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
