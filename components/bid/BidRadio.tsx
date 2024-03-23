'use client';

import React from 'react';
import clsx from 'clsx';

import { useFormContext } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectBid } from '@/redux/slices/bidSlice';

interface Props {
  text: string;
  id: string;
  onRadio: (name: string) => void;
}

export const BidRadio = ({ text, id, onRadio }: Props) => {
  const { radioStatus } = useAppSelector(selectBid);
  const { setValue } = useFormContext();

  return (
    <div
      onClick={() => {
        onRadio(id), setValue('radio', id);
      }}
      className="flex items-center gap-[10px] cursor-pointer">
      <div className="p-[3px] rounded-full w-[16px] h-[16px] border-[1px] border-[#738799] cursor-pointer">
        <div
          className={clsx(`transition-all opacity-0 bg-green h-full w-full rounded-full`, {
            'opacity-100': radioStatus === id,
          })}></div>
      </div>
      <div className="leading-[125%] text-extraSm">{text}</div>
    </div>
  );
};
