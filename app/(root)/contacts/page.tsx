import React from 'react';
import Image from 'next/image';
import { ContactsSec } from '@/components/contacts/ContactsSec';

import mapImg from '@/public/assets/images/map.png';
import { Title } from '@/components/home/Title';
import { Pathnames } from '@/components/page/Pathnames';

const Contacts = () => {
  return (
    <div className="bg-blueBg h-full">
      <div className="container flex flex-col items-start">
        <Pathnames sort={'contacts'} />
        <div className="mob:mb-[48px] mb-10">
          <Title text="Контакты" />
        </div>
        <div className="">
          <p className="text-[21px] mb-[24px] mob:leading-[100%] leading-[115%]">Адрес:</p>
          <div className="mob:leading-[1.7] mob:text-[16px] text-[14px] leading-[140%] mob:mb-[48px] mb-10">
            123100, Москва, Краснопресненская наб., 14 <br />
            Тел.: <span className="text-green">8 (800) 707-37-99</span>,
            <span className="text-green">+7 (499) 795-37-99</span>
            <br />
            E-mail: <span className="text-green">centr@expocentr.ru</span>
          </div>
        </div>
      </div>
      <Image
        src={mapImg}
        width={1920}
        height={800}
        alt="map"
        className="mx-auto mob:mb-[48px] mb-[88px]"
      />
      <div className="container mb-[132px]">
        <ContactsSec />
      </div>
    </div>
  );
};

export default Contacts;
