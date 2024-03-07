'use client';

import React from 'react';
import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks';

import minus from '@/public/assets/icons/minus-btn.svg';
import openIcon from '@/public/assets/icons/contact-arrow.svg';

import { faqData } from '@/lib/database/faqData';
import { selectFaq, setFaqTitle } from '@/redux/slices/faqSlice';
import clsx from 'clsx';
import { v4 } from 'uuid';

interface Props {
  visitors?: boolean;
  members?: boolean;
  all?: boolean;
  onTitle: (name: string) => void;
}

export const Select = ({ onTitle, visitors = false, members = false, all = false }: Props) => {
  const { faqTitle } = useAppSelector(selectFaq);

  return (
    <div className="w-full">
      {faqData
        .filter((item) => (visitors && item.visitors) || (members && item.members) || (all && item))
        .map((item) => (
          <div key={v4()} className="w-full">
            <div
              onClick={() => onTitle(item.title)}
              className={clsx(
                'w-full flex items-center justify-between border-y-[1px] border-y-navyBlue cursor-pointer',
                {
                  'border-t-navyBlue5': faqTitle === item.title,
                },
              )}>
              <h2 className="text-[21px] font-semibold py-[20px]">{item.title}</h2>
              <Image
                src={openIcon}
                alt="arrow"
                className={clsx('rotate-180 transition-all', {
                  'rotate-[360deg]': faqTitle === item.title,
                })}
              />
            </div>
            <div className="flex flex-col gap-y-[20px] pb-[40px] w-full max-w-[1000px]">
              {faqTitle === item.title &&
                item.faqAll.map((obj) => (
                  <div
                    key={v4()}
                    className="text-gray4 px-[40px] first-of-type:pt-[30px] flex flex-col items-start gap-y-[16px] leading-[1.5]">
                    <div className="flex items-start gap-x-[10px]">
                      {!item.wifi && <Image src={minus} alt="button" className="cursor-pointer" />}
                      <h4 className="text-[16px] text-bgWhite">{obj.title}</h4>
                    </div>
                    <h4
                      className={clsx({
                        'text-[16px] text-bgWhite ': item.wifi,
                      })}>
                      {obj.text}
                    </h4>
                    <div>
                      {obj.text2 && <h4>{obj.text2}</h4>}
                      {obj.text3 && <h4>{obj.text3}</h4>}
                      {obj.text4 && <h4>{obj.text4}</h4>}
                      {obj.list && <p className="faq-list">{obj.list}</p>}
                      {obj.list2 && <p className="faq-list">{obj.list2}</p>}
                      {obj.list3 && <p className="faq-list">{obj.list3}</p>}
                      {obj.list4 && <p className="faq-list">{obj.list4}</p>}
                      {obj.text5 && <h4>{obj.text5}</h4>}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};
