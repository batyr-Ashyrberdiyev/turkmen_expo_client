import React from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import search from '@/public/assets/icons/search.svg';
import close from '@/public/assets/icons/close-input.svg';

import { Radio } from './InputTypes';
import { GreenBtn } from './Buttons';
import { selectInput, setInputStatus } from '@/redux/slices/inputSlice';
import { v4 } from 'uuid';

export const inputRadio = [
  { name: 'Везде', id: 'all' },
  { name: 'В событиях', id: 'events' },
  { name: 'В новостях', id: 'news' },
];

export const Input = () => {
  const dispatch = useAppDispatch();
  const { inputStatus } = useAppSelector(selectInput);
  const [active, setActive] = React.useState(false);

  const setStatus = (name: string) => {
    dispatch(setInputStatus(name));
  };

  return (
    <>
      <div className="cursor-pointer">
        <Image
          src={search}
          alt="search"
          width={25}
          height={25}
          className="px-[5px]"
          onClick={() => setActive(true)}
        />
      </div>
      {active && (
        <div className="absolute top-0 left-0 w-full h-svh z-[100] overflow-y-hidden bg-blueBg">
          <div className="container relative">
            <div className="w-full flex justify-end mt-[40px]">
              <Image
                alt="close"
                className="cursor-pointer"
                onClick={() => setActive(false)}
                src={close}
              />
            </div>
            <div className="flex flex-col mt-[112px] items-center w-full max-w-[566px] mx-auto">
              <form className="w-full mb-[24px]">
                <input
                  type="search"
                  placeholder="Что найти?"
                  className="p-3 w-full leading-[150%] placeholder:leading-[150%] placeholder:text-gray focus:outline-none rounded-sm bg-transparent border-[1px] border-[#BCC4CC]"
                />
              </form>

              <div className="flex items-center gap-[48px] mb-[48px]">
                {inputRadio.map((item) => (
                  <div
                    onClick={() => setStatus(item.id)}
                    className="flex cursor-pointer items-center gap-[10px]"
                    key={v4()}>
                    <Radio fill={inputStatus === item.id} />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>

              <GreenBtn text={'Найти'} px />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
