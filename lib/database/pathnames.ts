interface MenuType {
  pathname: string;
  company?: boolean;
  members?: boolean;
  info: {
    title: string;
    link: string;
  }[];
}

export const sidebarData: MenuType[] = [
  {
    company: true,
    pathname: "О компании",
    info: [
      { title: "Коротко о нас", link: "/company/aboutus" },
      { title: "Выставочная деятельность", link: "" },
      { title: "История и награды", link: "" },
      { title: "Партнеры", link: "" },
      { title: "Работы в компании", link: "" },
      { title: "Наши издания", link: "" },
    ],
  },
  {
    members: true,
    pathname: "Участникам",
    info: [
      { title: "Информация для участников", link: "/members" },
      { title: "Онлайн заявка для участников", link: "/members/bid" },
      { title: "Меню 3 (при необходимости)", link: "" },
      { title: "Меню 4 (при необходимости)", link: "" },
      { title: "Меню 5 (при необходимости)", link: "" },
    ],
  },
];

interface HeaderType {
  title: string;
  link: string;
  id: number;
}

export const headerMenu: HeaderType[] = [
  { title: "О компании", link: "/company/aboutus", id: 1 },
  { title: "Новости", link: "", id: 2 },
  { title: "FAQ", link: "/faq", id: 3 },
  { title: "Контакты", link: "/contacts", id: 4 },
];

export const headerMenu2: HeaderType[] = [
  { title: "Календарь мероприятий", link: "/calendar", id: 1 },
  { title: "Участникам", link: "/members", id: 2 },
  { title: "Посетителям", link: "", id: 3 },
  { title: "Услуги", link: "", id: 4 },
];

interface FooterType {
  title: string;
  link: string;
}

export const footerMenu = [
  { title: "Календарь мероприятий", link: "/calendar" },
  { title: "Участникам", link: "/members" },
  { title: "Посетителям", link: "" },
  { title: "Организаторам", link: "" },
];

export const footerMenu2: FooterType[] = [
  { title: "Территория комплекса", link: "" },
  { title: "О компании", link: "/company/aboutus" },
  { title: "Пресс-центр", link: "" },
  { title: "FAQ", link: "/faq" },
  { title: "Контакты", link: "/contacts" },
  { title: "Справочный центр", link: "" },
];

export const footerInfo: string[] = [
  "123100, Москва, Краснопресненская наб., 14",
  "Тел.: 8 (800) 707-37-99, +7 (499) 795-37-99",
  "E-mail: centr@expocentr.ru",
];
