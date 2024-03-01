"use client";

import clsx from "clsx";
import React from "react";

export const BidDrop = () => {
  const [title, setTitle] = React.useState("");
  const [active, setActive] = React.useState(false);
  const phoneMail = ["телефон", "E-mail"];
  const dropRef = React.useRef<HTMLDivElement>(null);

  const onOption = (name: string) => {
    setActive(false);
    setTitle(name);
  };

  React.useEffect(() => {}, []);

  return (
    <div className="">
      <div
        onClick={() => setActive(!active)}
        className="bid-drop py-[15px] mb-[10px]"
      >
        {title}
      </div>
      {active && (
        <div className="bg-navyBlue3 rounded-none border-none">
          {phoneMail.map((item) => (
            <div
              onClick={() => onOption(item)}
              className={clsx("bid-drop py-[10px]", {
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
