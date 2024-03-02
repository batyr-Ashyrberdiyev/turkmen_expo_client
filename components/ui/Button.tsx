"use client";

import clsx from "clsx";
import React from "react";

export const Button = ({
  text,
  mt,
  onEventBtn,
  border = false,
}: {
  text: string;
  mt?: string;
  onEventBtn: () => void;
  border?: boolean;
}) => {
  const [eventBtn, setEventBtn] = React.useState<boolean>(false);

  return (
    <button
      onClick={onEventBtn}
      className={clsx(`btn ${mt} drop-shadow-md`, {
        "bg-transparent rounded-sm border-[1px] border-navyBlue4": border,
        "bg-green": !border,
      })}
    >
      {text}
    </button>
  );
};
