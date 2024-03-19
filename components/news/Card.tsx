import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  img: StaticImageData;
  date: string;
  text: string;
  grid: boolean;
}

const Card = ({ img, date, text, grid }: Props) => {
  return grid ? (
    <div className="border-[1px] border-navyBlue cursor-pointer">
      <Image width={420} height={210} src={img} alt="событие"></Image>
      <div className="p-[25px]">
        <p className="text-extraSm text-gray4 mb-[10px]">{date}</p>
        <p className="font-bold text-[16px] leading-[125%] w-full max-w-[355px]">{text}</p>
      </div>
    </div>
  ) : (
    <div className="border-[1px] border-navyBlue cursor-pointer">
      <div className="flex">
        <Image width={grid ? 420 : 300} height={210} src={img} alt="событие"></Image>
        <div className="p-[25px]">
          <p className="text-extraSm text-gray4 mb-[10px]">{date}</p>
          <p className="font-bold text-[16px] leading-[125%] w-full max-w-[483px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
