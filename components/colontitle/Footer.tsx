'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import vk from '@/public/assets/icons/footer/vk.svg';
import rss from '@/public/assets/icons/footer/rss.svg';
import telegram from '@/public/assets/icons/footer/telegram.svg';

import { footerInfo, footerMenu, footerMenu2 } from '@/lib/database/pathnames';
import { v4 } from 'uuid';

export const icons = [
  { title: telegram, link: '' },
  { title: vk, link: '' },
  { title: rss, link: '' },
];

export const Footer = () => {
  return (
    <div className="bg-darkBlue py-[40px]">
      <div className="container">
        <header className="flex items-start justify-between text-bgWhite text-sm mb-[80px]">
          <div className="w-full max-w-[600px] flex items-start justify-between gap-x-[20px]">
            <div className="w-full max-w-[290px] flex flex-col items-start gap-y-[10px]">
              {footerMenu.map((item) => (
                <Link key={v4()} href={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="w-full max-w-[290px] flex flex-col items-start gap-y-[10px]">
              {footerMenu2.map((item) => (
                <Link key={v4()} href={item.link} className="cursor-pointer">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-[39px] flex flex-col gap-y-[10px]">
              {footerInfo.map((item) => (
                <p key={v4()}>{item}</p>
              ))}
            </div>
            <form className="flex flex-col items-start gap-x-[10px]">
              <label htmlFor="footer" className="text-sm mb-[19px]">
                Подписка на новости «ТуркменЭкспо»
              </label>
              <div className="flex items-center gap-[10px]">
                <input
                  id="footer"
                  type="email"
                  placeholder="Ваш e-mail адрес"
                  className="focus:outline-none border-[1px] border-gray3 placeholder:text-bgWhite placeholder:text-[12px] px-[15px] py-[10px] bg-navyBlue2 text-[12px] text-bgWhite"
                />
                <button type="submit" className="bg-navyBlue px-[15px] text-[12px] py-[10px]">
                  Подписаться
                </button>
              </div>
            </form>
          </div>
        </header>
        <footer className="text-bgWhite flex items-center justify-between pt-[17px] border-t-[1px] border-gray3">
          <p className="text-[10px]">
            © 2024 АО «ЭКСПОЦЕНТР» выставочная компания, выставки Москвы 2024
          </p>
          <div className="flex items-center gap-x-[10px]">
            {icons.map((item) => (
              <Link key={v4()} href={item.link}>
                <Image src={item.title} alt={item.title} />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
