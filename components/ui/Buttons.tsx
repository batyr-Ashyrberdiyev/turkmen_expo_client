"use client";

import React from "react";

export const GreenBtn = ({
  text,
  mt,
  onEventBtn,
}: {
  text: string;
  mt?: string;
  onEventBtn: () => void;
  border?: boolean;
}) => {
  return (
    <button
      onClick={onEventBtn}
      className={`btn ${mt} drop-shadow-md rounded-sm bg-green hover:bg-lightGreen transition-all`}
    >
      {text}
    </button>
  );
};

interface BorderProps {
  onEventBtn?: () => void;
  text: string;
  mt?: string;
}

export const BorderBtn = ({ onEventBtn, text, mt }: BorderProps) => {
  return (
    <button
      className={`mt-[${mt}]px btn bg-transparent border-[1px] border-navyBlue4 rounded-sm`}
      onClick={onEventBtn}
    >
      {text}
    </button>
  );
};
