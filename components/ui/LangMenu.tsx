'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { v4 } from 'uuid';

import triangle from '@/public/assets/icons/drop-icon.svg';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { selectHeader } from '@/redux/slices/headerSlice';
import { setActiveLang } from '@/redux/slices/headerSlice';

export const lang = ['Ру', 'Tu', 'En'];

export const LangMenu = () => {
  const dispatch = useAppDispatch();
  const { activeLang } = useAppSelector(selectHeader);
  const [active, setActive] = React.useState(false);
  const [rotate, setRotate] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const setLang = (str: string) => {
    setActive(false);
    dispatch(setActiveLang(str));
  };

  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActive(false);
        setRotate(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative cursor-pointer flex items-center gap-x-[20px]"
      onClick={() => {
        setActive(!active);
        setRotate(!rotate);
      }}>
      <div className="flex items-center px-[12px]">
        <p>{activeLang}</p>
        <Image
          src={triangle}
          alt="arrow"
          className={`${rotate && 'rotate-180'} transition-rotate duration-300 img-auto`}
        />
      </div>
      {active && (
        <div className="absolute overflow-hidden z-10 flex flex-col top-[27px] bg-darkBlue transition-all duration-300">
          {lang
            .filter((item) => item !== activeLang)
            .map((item) => (
              <div
                key={v4()}
                onClick={() => setLang(item)}
                className={clsx('p-3 pr-[22px] text-extraSm transition-all', {
                  'hover:bg-navyBlue2': item === item,
                })}>
                {item}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
