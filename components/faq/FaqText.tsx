import React from "react";
import Image from "next/image";

import minus from "@/public/assets/icons/minus-btn.svg";

export const FaqText1 = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-full text-left max-w-[1000px] ml-[40px] mb-[24px]">
      <div className="flex flex-col items-start gap-y-[16px] leading-[1.5]">
        <div className="flex items-start gap-x-[10px]">
          <Image src={minus} alt="button" className="cursor-pointer" />
          <h4 className="text-[18px]">{title}</h4>
        </div>
        <p className="text-gray4">{text}</p>
      </div>
    </div>
  );
};

export const FaqText2 = (...props: any) => {
  const { title, text, text2, text3, text4, text5, list, list2, list3, list4 } =
    props;

  return (
    <div className="w-full text-left max-w-[1000px] ml-[40px] mb-[24px]">
      <div className="flex flex-col items-start gap-y-[16px] leading-[1.5]">
        <div className="flex items-start gap-x-[10px]">
          <Image src={minus} alt="button" className="cursor-pointer" />
          <h4 className="text-[18px]">{title}</h4>
        </div>
        <div className="text-gray4 flex flex-col items-start gap-y-[20px] leading-[1.5]">
          <h4>{text}</h4>
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
    </div>
  );
};
