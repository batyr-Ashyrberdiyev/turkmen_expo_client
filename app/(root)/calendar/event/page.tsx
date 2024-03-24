import React from "react";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";

import glassImg from "@/public/assets/images/events/CardFullImg.png";
import glassIcon from "@/public/assets/images/events/glassIcon.png";
import calendar from "@/public/assets/icons/calendar.svg";

import { BorderBtn } from "@/components/ui/Buttons";
import { fullEventData } from "@/lib/database/eventsData";
import { v4 } from "uuid";

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
        <div className="relative z-10 h-[350px]">
          <Image
            src={glassImg}
            alt="выставка"
            width={1920}
            height={400}
            className="mx-auto absolute top-0 left-0 -z-10 w-full h-full"
          />

          <div className=" w-full h-full z-20">
            <div className="container h-full">
              <div className="h-full flex flex-col justify-between">
                <div className="flex items-center">
                  <div className="flex w-full gap-[45px]">
                    <div className="flex gap-[15px]">
                      <div className="w-[220px] h-[180px] bg-gray4 py-[10px] px-[33px] flex justify-center items-center">
                        <Image
                          src={glassIcon}
                          width={154}
                          height={160}
                          alt="Иконка"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] max-w-[580px] w-full mt-[40px]">
                        <h3
                          className={`${roboto_slab.className} font-semibold text-[34px] leading-[100%]`}
                        >
                          Мир Стекла-2024
                        </h3>
                        <h4 className="text-[16px] leading-[150%]">
                          25-я международная выставка стеклопродукции технлогий
                          и оборудования для изготовления стекла
                        </h4>

                        <div className="text-[10px] flex flex-col gap-[5px]">
                          <p>Организатор</p>
                          <p>АО «ЭКСПОЦЕНТР»</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full max-w-[238px] mt-[40px]">
                      <h3 className="text-[21px] font-semibold mb-5 leading-[100%]">
                        27 февраля - 1 марта 2024
                      </h3>
                      <div className="flex items-center gap-[10px]">
                        <Image src={calendar} alt="calendar" />
                        <p className="text-gray4">
                          Добавить в календарь (ics файл)
                        </p>
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
                <div key={v4()}>
                  <p className="mb-[40px] leading-[100%] text-[21px] font-semibold">
                    {item.title}
                  </p>
                  <div className="flex gap-[20px]">
                    {item.info?.map((text) => (
                      <div
                        key={v4()}
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
                    <h3
                      key={v4()}
                      className="text-[21px] leading-[100%] font-semibold"
                    >
                      {obj.title}
                    </h3>
                    {obj.info?.map((text) => (
                      <div key={v4()} className="flex flex-col gap-[20px]">
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
                  <div className="flex flex-col gap-[10px]" key={v4()}>
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
  );
};

export default Event;
