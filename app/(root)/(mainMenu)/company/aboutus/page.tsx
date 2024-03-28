'use client';

import React from 'react';
import Image from 'next/image';

import aboutImg from '@/public/assets/images/about.png';
import { aboutData } from '@/lib/database/about';
import { v4 } from 'uuid';
import { Pathnames } from '@/components/page/Pathnames';

const About = () => {
  return (
    <div className="flex flex-col items-start gap-y-[24px] mb-[100px] w-full">
      <div>
        <Pathnames sort="about" />
        <h2 className="text-extra font-semibold leading-[100%]">Коротко о нас</h2>
      </div>

      <Image src={aboutImg} width={1000} height={500} alt="about image" />
      <div className="flex flex-col items-start gap-y-[24px] text-p">
        {aboutData.map((text) => (
          <p key={v4()} className="text-[16px] leading-[150%]">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
