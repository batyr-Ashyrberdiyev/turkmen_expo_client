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
      className='btn drop-shadow-md rounded-sm bg-green hover:bg-lightGreen transition-all'
      style={{marginTop: mt}}
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
      onClick={onEventBtn}
      className='btn bg-transparent border-[1px] border-navyBlue4 rounded-sm'
      style={{marginTop: mt}}
    >
      {text}
    </button>
  );
};
