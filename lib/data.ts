import eventImg from "@/public/assets/images/EventImg.png";

const eventCardText: string = `Равным образом, консультация с широким активом является качественно
новой ступенью вывода текущих активов. Идейные соображения высшего
порядка, а также.`;

export const eventCardData = [
  {
    img: eventImg,
    suptitle: "Выставка-ярмарка",
    title: "Всё для детей",
    text: eventCardText,
    organizer: "ОРГАНИЗАТОР:",
    footerText: "ОАО «Рога и копыта»",
    date: "16.02.2024–18.02.2024",
    calendar: `Добавить в календарь (ics-файл)`,
  },
  {
    img: eventImg,
    suptitle: "Выставка-ярмарка",
    title: "Всё для детей",
    text: eventCardText,
    organizer: "ОРГАНИЗАТОР:",
    footerText: "ОАО «Рога и копыта»",
    date: "16.02.2024–18.02.2024",
    calendar: `Добавить в календарь (ics-файл)`,
  },
];

import news1 from "@/public/assets/images/news1.png";
import news2 from "@/public/assets/images/news2.png";
import news3 from "@/public/assets/images/news3.png";
import news4 from "@/public/assets/images/news4.png";

export const newsCardData = [
  {
    date: "06.02.2024",
    img: news1,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news2,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news3,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news4,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news1,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news2,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news3,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news4,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news1,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news2,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news3,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
  {
    date: "06.02.2024",
    img: news4,
    text: `В своём стремлении повысить качество жизни, они забывают, что глубокий уровень погружения.`,
  },
];

import car from "@/public/assets/icons/service/car.svg";
import bus from "@/public/assets/icons/service/bus.svg";
import track from "@/public/assets/icons/service/track.svg";

import { RoadCardProps } from "./types";

export const roadCardData: RoadCardProps[] = [
  {
    icon: car,
    text: "На машине",
  },
  {
    icon: bus,
    text: "На автобусе",
  },
  {
    icon: track,
    text: "Проезд грузового транспорта",
  },
];

import call from "@/public/assets/icons/service/call.svg";
import megaphone from "@/public/assets/icons/service/megaphone.svg";
import bag from "@/public/assets/icons/service/bag.svg";

export const contactCardData: RoadCardProps[] = [
  {
    icon: call,
    text: "Справочный центр",
  },
  {
    icon: bag,
    text: "Услуги",
  },
  {
    icon: megaphone,
    text: "Реклама",
  },
];

import partner from "@/public/assets/icons/partner.svg";
import { StaticImageData } from "next/image";

export const partnersData: StaticImageData[] = [
  partner,
  partner,
  partner,
  partner,
  partner,
];
