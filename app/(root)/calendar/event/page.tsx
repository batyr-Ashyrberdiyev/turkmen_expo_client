import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Roboto_Slab } from "next/font/google";

import glassImg from "@/public/assets/images/events/CardFullImg.png";
import glassIcon from "@/public/assets/images/events/glassIcon.png";
import { BorderBtn } from "@/components/ui/Buttons";
import { fullEventData } from "@/lib/database/eventsData";

const roboto_slab = Roboto_Slab({
  weight: ["600"],
  subsets: ["latin", "cyrillic"],
});

const Event = () => {
  console.log(fullEventData);
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
                      <div className="w-[220px] h-[180px] bg-gray mr-[15px] py-[10px] px-[33px]">
                        <Image src={glassIcon} alt="Иконка" className="" />
                      </div>
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

          <div className="container mt-[60px] mb-[100px]">
            <div className="flex flex-col gap-[60px]">
              {fullEventData
                .filter((item) => item.arrangement)
                .map((item) => (
                  <div key={uuidv4()}>
                    <p className="mb-[40px] text-[21px] font-semibold">
                      {item.title}
                    </p>
                    <div className="flex gap-[20px]">
                      {item.info?.map((text) => (
                        <div
                          key={uuidv4()}
                          className="w-full max-w-[290px] flex flex-col gap-[20px]"
                        >
                          <h3 className="leading-[120%] text-[18px] font-semibold">
                            {text.title}
                          </h3>
                          <div className="leading-[130%]">
                            <p className="text-gray4">{text.date}</p>
                            <p className="text-gray">{text.time}</p>
                          </div>
                          <div className="leading-[130%]">
                            <p className="text-gray4">{text.date2}</p>
                            <p className="text-gray">{text.time2}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              <div className="flex flex-col gap-[33px]">
                {fullEventData
                  .filter((item) => item.theme)
                  .map((obj) => (
                    <>
                      <h3 key={uuidv4()} className="text-[21px] font-semibold">
                        {obj.title}
                      </h3>
                      {obj.info?.map((text) => (
                        <div
                          key={uuidv4()}
                          className="flex flex-col gap-[20px]"
                        >
                          <h4 className="text-[18px] font-semibold leading-[120%]">
                            {text.title}
                          </h4>

                          <div className="pl-[9px] leading-[130%] list-disc">
                            <div className="text-gray4 relative">
                              <div className="w-[4px] h-[4px] rounded-full bg-lightGreen absolute top-[7px] left-[-10px]"></div>
                              {text.list}
                            </div>
                            <div className="text-gray4 relative">
                              <div className="w-[4px] h-[4px] rounded-full bg-lightGreen absolute top-[7px] left-[-10px]"></div>
                              {text.list2}
                            </div>
                            <div className="text-gray4 relative">
                              <div className="w-[4px] h-[4px] rounded-full bg-lightGreen absolute top-[7px] left-[-10px]"></div>
                              {text.list3}
                            </div>
                            <div className="text-gray4 relative">
                              <div className="w-[4px] h-[4px] rounded-full bg-lightGreen absolute top-[7px] left-[-10px]"></div>
                              {text.list4}
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ))}
              </div>

              <hr className="border-navyBlue" />

              <div>
                {fullEventData
                  .filter((item) => item.address)
                  .map((obj) => (
                    <div className="flex flex-col gap-[10px]">
                      <h3 className="text-21 mb-[10px]">{obj.title}</h3>
                      <h4 className="text-gray leading-[130%]">{obj.place}</h4>
                      <div className="leading-[130%]">
                        <p>{obj.phone}</p>
                        <p>{obj.phone2}</p>
                        <p>{obj.faks}</p>
                        <p>{obj.email}</p>
                        <p>{obj.url}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
