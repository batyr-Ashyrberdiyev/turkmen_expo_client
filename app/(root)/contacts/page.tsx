import React from "react";
import Image from "next/image";

import mapImg from "@/public/assets/images/map.png";

const Contacts = () => {
  return (
    <div className="bg-blueBg ">
      <div className="container flex flex-col items-start mb-[100px] pt-[20px]">
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
        <Image src={mapImg} alt="map" className="w-full" />
      </div>
    </div>
  );
};

export default Contacts;
