import React from "react";
import Image from "next/image";
import { ContactsSec } from "@/components/sections/ContactsSec";

import mapImg from "@/public/assets/images/map.png";

const Contacts = () => {
  return (
    <div className="bg-blueBg h-full">
      <div className="container flex flex-col items-start pt-[20px]">
        <p className="text-[12px] mb-[24px] text-gray4">
          Главная / Календарь мероприятий
        </p>
        <h2 className="text-extra font-semibold mb-[48px]">
          Календарь мероприятий
        </h2>
        <p className="text-[21px] mb-[24px]">Адрес:</p>
        <p className="leading-[1.7] mb-[48px]">
          123100, Москва, Краснопресненская наб., 14 <br />
          Тел.: 8 (800) 707-37-99 (звонок по России бесплатный), <br />
          +7 (499) 795-37-99 <br />
          E-mail: centr@expocentr.ru
        </p>
      </div>
      <Image
        src={mapImg}
        width={1920}
        height={800}
        alt="map"
        className="mx-auto mb-[24px]"
      />
      <div className="container mb-[132px]">
        <ContactsSec />
      </div>
    </div>
  );
};

export default Contacts;
