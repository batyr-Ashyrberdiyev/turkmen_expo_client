"use client";

import clsx from "clsx";
import React from "react";

export const BidDrop = () => {
  const [title, setTitle] = React.useState("телефон");
  const [active, setActive] = React.useState(false);
  const phoneMail = ["телефон", "E-mail"];

  const onOption = (name: string) => {
    setActive(false);
    setTitle(name);
  };

  return (
    <div className="">
      <div
        onClick={() => setActive(!active)}
        className="bid-input py-[15px] mb-[10px]"
      >
        {title}
      </div>
      {active && (
        <div className="bg-navyBlue3">
          {phoneMail.map((item) => (
            <div
              onClick={() => onOption(item)}
              className={clsx("bid-input", {
                "hover:bg-green": item === item,
              })}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
