import React from "react";
import Image from "next/image";

import glassImg from "@/public/assets/images/events/CardFullImg.png";

const Event = () => {
  return (
    <>
      <div className="container">
        <p className="py-5">Главная / Календарь мероприятий / Мероприятие</p>
      </div>
      <div>
        <div className="relative">
          <Image
            src={glassImg}
            alt="выставка"
            className="absolute top-0 left-0"
          />

          <div className="container">
            <div className="absolute">
              <div className="flex items-center justify-around">
                <div className="flex items-end">
                  <Image src={""} alt="" />
                  <div className="flex flex-col gap-3">
                    <h2 className="uppercase">Мир стекла-2024</h2>
                    <p>
                      25-я международная выставка стеклопродукции, технологий и
                      оборудования для изготовления и обработки стекла
                    </p>
                    <div>
                      <p>Организатор</p>
                      <p className="uppercase">АО «ЭКСПОЦЕНТР»</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Event;
