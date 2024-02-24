"use client";

import React from "react";
import Image from "next/image";

import { useSearchParams } from "next/navigation";

import search from "@/public/assets/icons/search.svg";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { selectHeader, setShowInput } from "@/redux/slices/headerSlice";

export const Input = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { showInput } = useAppSelector(selectHeader);
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        dispatch(setShowInput(false));
      }
    };
    document.body.addEventListener("click", handleClick);

    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="cursor-pointer">
      <div className="">
        {!showInput && (
          <Image
            src={search}
            alt="search"
            width={25}
            height={25}
            className="px-[5px]"
            onClick={() => {
              dispatch(setShowInput(true));
            }}
          />
        )}
      </div>
      {showInput && (
        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск..."
          className="rounded-[2px] z-50 absolute top-[7px] py-[5px] px-[10px] focus:outline-none text-black placeholder:text-black"
        />
      )}
    </div>
  );
};
