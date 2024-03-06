import React from "react";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";

import glassImg from "@/public/assets/images/events/CardFullImg.png";
import { BorderBtn } from "@/components/ui/Buttons";

const roboto_slab = Roboto_Slab({
  weight: ["600"],
  subsets: ["latin", "cyrillic"],
});

const Event = () => {
  return (
    <div>
      <div className="container">
        <p className="py-5">Главная / Календарь мероприятий / Мероприятие</p>
      </div>
      <div>
        <div>
          <div className="relative h-full">
            <Image
              src={glassImg}
              alt="выставка"
              width={1920}
              height={400}
              className="mx-auto"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              <div className="container h-full">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center h-full">
                    <div className="flex w-full h-full justify-between">
                      <div className="w-[220px] h-[180px] bg-gray mr-[15px]"></div>
                      <div className="flex justify-between w-full h-full">
                        <div className="flex flex-col gap-[9px] max-w-[580px] mt-[40px]">
                          <h3
                            className={`${roboto_slab.className} font-semibold text-[34px] leading-[100%]`}
                          >
                            Мир Стекла-2024
                          </h3>
                          <h4 className="text-[16px] leading-[150%]">
                            25-я международная выставка стеклопродукции
                            технлогий и оборудования для изготовления стекла
                          </h4>

                          <div className="text-[10px]">
                            <p>Организатор</p>
                            <p>АО «ЭКСПОЦЕНТР»</p>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h3>27 февраля - 1 марта 2024</h3>
                          <p>Добавить в календарь (ics файл)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-5 mb-[20px]">
                    <BorderBtn text={"Сайт выставки"} />
                    <BorderBtn text={"Забронировать стенд"} />
                    <BorderBtn text={"Получить электронный билет"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
