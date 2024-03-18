"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  title?: string;
  text?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  list?: string;
  list2?: string;
  list3?: string;
  list4?: string;
  wifi?: string;
}

const PlusDrop = ({ ...item }: Props) => {
  const {
    title,
    text,
    text2,
    text3,
    text4,
    text5,
    list,
    list2,
    list3,
    list4,
    wifi,
  } = item;

  return (
    <div className="ml-[30px]">
      <h4
        className={clsx({
          "text-[16px] text-bgWhite ": item.wifi,
        })}
      >
        {item.text}
      </h4>

      <div>
        {item.text2 && <h4>{item.text2}</h4>}
        {item.text3 && <h4>{item.text3}</h4>}
        {item.text4 && <h4>{item.text4}</h4>}
        {item.list && <p className="faq-list">{item.list}</p>}
        {item.list2 && <p className="faq-list">{item.list2}</p>}
        {item.list3 && <p className="faq-list">{item.list3}</p>}
        {item.list4 && <p className="faq-list">{item.list4}</p>}
        {item.text5 && <h4>{item.text5}</h4>}
      </div>
    </div>
  );
};

export default PlusDrop;
