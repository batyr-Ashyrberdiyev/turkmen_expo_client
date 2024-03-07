import eventImg from "@/public/assets/images/events/EventImg.png";

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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
  },
];

export const eventPagination = [
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
    footerText: "ОАО «Рога копыта»",
    date: "16.02.2024–18.02.2024",
    calendar: `Добавить в календарь (ics-файл)`,
  },
];

type EventInfo = {
  title: string;
  date?: string;
  time?: string;
  date2?: string;
  time2?: string;
  list?: string;
  list2?: string;
  list3?: string;
  list4?: string;
};

type FullEventDataItem = {
  arrangement?: boolean;
  theme?: boolean;
  address?: boolean;
  title: string;
  info?: EventInfo[];
  company?: string;
  place?: string;
  phone?: string;
  phone2?: string;
  faks?: string;
  email?: string;
  url?: string;
};

export const fullEventData: FullEventDataItem[] = [
  {
    arrangement: true,
    title: "Сроки проведения",
    info: [
      {
        title: "Даты проведения:",
        date: "27—29 февраля 2024",
        time: "с 10:00 до 18:00",
        date2: "1 марта 2024",
        time2: "с 10:00 до 16:00",
      },
      {
        title: "Монтаж:",
        date: "24—26 февраля 2024",
      },
      {
        title: "Демонтаж:",
        date: "2 марта 2024",
      },
      {
        title: "Место проведения:",
        date: "*место*",
      },
    ],
  },
  {
    theme: true,
    title: "Тематика мероприятия",
    info: [
      {
        title: "Производство стекла",
        list: "Сырье для производства стекла",
        list2: "Технологии варки стекла",
        list3: "Системы загрузки и удаления шихты",
        list4: "Печи отжига (леры)",
      },
      {
        title: "Оборудование и технологии для обработки стекла",
        list: "Резка и раскрой листового стекла",
        list2: "Сверление стекла",
        list3: "Шлифование и полирование стекла",
        list4: "Производство стеклопакетов",
      },
    ],
  },
  {
    address: true,
    title: "Организатор",
    company: "АО «ЭКСПОЦЕНТР»",
    place: "123100 Москва, Краснопресненская наб., 14",
    phone: "Тел.: 8 (800) 707-37-99 (звонок по России бесплатный),",
    phone2: "+7 (499) 795-37-99",
    faks: "Факс: +7 (495) 605-60-75",
    email: "E-mail: centr@expocentr.ru",
    url: "https://www.expocentr.ru",
  },
];
