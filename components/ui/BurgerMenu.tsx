'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import ru from '@/public/assets/icons/header/ru.svg';
import en from '@/public/assets/icons/header/en.svg';
import tm from '@/public/assets/icons/header/tm.svg';
import arrow from '@/public/assets/icons/header/burger-arrow.svg';

import { headerMenu, headerMenu2, sidebarData } from '@/lib/database/pathnames';
import { link } from 'fs';

export const flags = [
  { name: 'Tm', flag: tm },
  { name: 'Ру', flag: ru },
  { name: 'En', flag: en },
];

export const BurgerMenu = () => {
  const [activeDrop, setActiveDrop] = useState('');
  const main = document.querySelector('.main');
  const wrapper = document.querySelector('.wrapper');

  useEffect(() => {
    main?.classList.add('overflow-hidden');
    wrapper?.classList.add('overflow-hidden');

    return () => {
      main?.classList.remove('overflow-hidden');
      wrapper?.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className="bg-green overflow-auto fixed w-full z-[1001] top-[74px] bottom-0 left-0 min-h-[100vh] h-full px-4 py-10 flex flex-col gap-10 overflow-y-auto">
      <div className="flex flex-col gap-5">
        {headerMenu2.map((item) => (
          <div className="">
            {!activeDrop && (
              <Link
                onClick={() => {
                  !item.one && setActiveDrop(item.title);
                }}
                href={item.link}
                key={v4()}
                className="cursor-pointer flex items-center justify-between">
                <p className="text-[18px] leading-[135%]">{item.title}</p>
                {!item.one && <Image src={arrow} alt="стрелка" />}
              </Link>
            )}

            {item.title === activeDrop &&
              sidebarData.map((obj) =>
                obj.info.map((text) => (
                  <div className="flex flex-col">
                    <div className="flex items-center gap-[10px] mb-[10px]">
                      <Image src={arrow} alt="стрелка" className="rotate-180" />
                      <h3 className="leading-[135%] text-[18px]">{activeDrop}</h3>
                    </div>
                    <hr className="border-bgWhite mb-5" />
                  </div>
                )),
              )}
          </div>
        ))}
      </div>

      <hr className="border-bgWhite" />

      <div className="flex flex-col gap-5">
        {headerMenu.map((item) => (
          <Link className="cursor-pointer flex items-center justify-between" href={item.link}>
            <p>{item.title}</p>
            <Image src={arrow} alt="стрелка" width={20} height={20} />
          </Link>
        ))}
      </div>

      <div className="flex mx-auto items-center gap-10 mb-[60px]">
        {flags.map((item) => (
          <div className="flex items-center gap-[10px] cursor-pointer">
            <p className="leading-[140%]">{item.name}</p>
            <Image src={item.flag} alt="флаг" />
          </div>
        ))}
      </div>
    </div>
  );
};
