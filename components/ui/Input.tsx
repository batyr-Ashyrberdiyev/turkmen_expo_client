import React from "react";
import Image from "next/image";

import { Radio } from "./InputTypes";

import search from "@/public/assets/icons/search.svg";
import close from "@/public/assets/icons/close-input.svg";
import { GreenBtn } from "./Buttons";

export const inputRadio = ["Везде", "В событиях", "В новостях"];

export const Input = () => {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <div className="cursor-pointer">
        <Image
          src={search}
          alt="search"
          width={25}
          height={25}
          className="px-[5px]"
          onClick={() => setActive(true)}
        />
      </div>
      {active && (
        <div className="absolute top-0 left-0 w-full h-svh z-[100] overflow-y-hidden bg-blueBg">
          <div className="container relative">
            <div className="w-full flex justify-end mt-[40px]">
              <Image
                alt="close"
                className="cursor-pointer"
                onClick={() => setActive(false)}
                src={close}
              />
            </div>
            <div className="flex flex-col mt-[112px] items-center w-full max-w-[566px] mx-auto">
              <form className="w-full mb-[24px]">
                <input
                  type="search"
                  placeholder="Что найти?"
                  className="p-3 w-full leading-[150%] placeholder:leading-[150%] placeholder:text-gray focus:outline-none rounded-sm bg-transparent border-[1px] border-[#BCC4CC]"
                />
              </form>

              <div className="flex items-center gap-[48px] mb-[48px]">
                {inputRadio.map((item) => (
                  <div className="flex items-center gap-[10px]">
                    <Radio hover />
                    <p>{item}</p>
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
