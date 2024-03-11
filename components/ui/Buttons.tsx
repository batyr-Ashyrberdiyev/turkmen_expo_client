"use client";

import React from "react";
import clsx from "clsx";

export const GreenBtn = ({
  text,
  mt,
  onEventBtn,
  px,
}: {
  text: string;
  mt?: string;
  onEventBtn?: () => void;
  border?: boolean;
  px?: boolean;
}) => {
  return (
    <button
      onClick={onEventBtn}
      className={clsx(
        `${mt} drop-shadow-md py-[17px] text-[14px] rounded-sm bg-green text-bgWhite hover:bg-lightGreen font-medium transition-all`,
        {
          "px-[43px]": !px,
          "px-[70px]": px,
        }
      )}
    >
      {text}
    </button>
  );
};

interface BorderProps {
  onEventBtn?: () => void;
  text: string;
  mt?: string;
  px?: boolean;
}

export const BorderBtn = ({ onEventBtn, text, mt, px }: BorderProps) => {
  return (
    <button
      className={`mt-[${mt} border-btn ${px && "px-[43px]"}`}
      onClick={onEventBtn}
    >
      {text}
    </button>
  );
};
