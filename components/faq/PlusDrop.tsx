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
  const { text, text2, text3, text4, text5, list, list2, list3, list4, wifi } =
    item;

  return (
    <div className="ml-[30px]">
      <h4
        className={clsx({
          "text-[16px] text-bgWhite ": wifi,
        })}
      >
        {text}
      </h4>

      <div>
        {text2 && <h4>{text2}</h4>}
        {text3 && <h4>{text3}</h4>}
        {text4 && <h4>{text4}</h4>}
        {list && <p className="faq-list">{list}</p>}
        {list2 && <p className="faq-list">{list2}</p>}
        {list3 && <p className="faq-list">{list3}</p>}
        {list4 && <p className="faq-list">{list4}</p>}
        {text5 && <h4>{text5}</h4>}
      </div>
    </div>
  );
};

export default PlusDrop;
