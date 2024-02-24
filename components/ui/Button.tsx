"use client";

import React from "react";

export const Button = ({
  text,
  mt,
  onEventBtn,
}: {
  text: string;
  mt?: string;
  onEventBtn: () => void;
}) => {
  const [eventBtn, setEventBtn] = React.useState<boolean>(false);

  return (
    <button onClick={onEventBtn} className={`btn ${mt}`}>
      {text}
    </button>
  );
};
