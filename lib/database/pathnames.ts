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
      { title: "Выставочная деятельность", link: "/" },
      { title: "История и награды", link: "/" },
      { title: "Партнеры", link: "/" },
      { title: "Работы в компании", link: "/" },
      { title: "Наши издания", link: "/" },
    ],
  },
  {
    members: true,
    pathname: "Участникам",
    info: [
      { title: "Информация для участников", link: "/members" },
      { title: "Онлайн заявка для участников", link: "/members/bid" },
      { title: "Меню 3 (при необходимости)", link: "/" },
      { title: "Меню 4 (при необходимости)", link: "/" },
      { title: "Меню 5 (при необходимости)", link: "/" },
    ],
  },
];
