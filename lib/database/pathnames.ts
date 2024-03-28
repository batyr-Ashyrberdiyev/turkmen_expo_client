interface MenuType {
  pathname: string;
  company?: boolean;
  members?: boolean;
  news?: boolean;
  info: {
    title: string;
    link: string;
  }[];
}

export const sidebarData: MenuType[] = [
  {
    company: true,
    pathname: 'О компании',
    info: [
      { title: 'Коротко о нас', link: '/company/aboutus' },
      { title: 'Выставочная деятельность', link: '' },
      { title: 'История и награды', link: '' },
      { title: 'Партнеры', link: '' },
      { title: 'Работы в компании', link: '' },
      { title: 'Наши издания', link: '' },
    ],
  },
  {
    members: true,
    pathname: 'Участникам',
    info: [
      { title: 'Информация для участников', link: '/members' },
      { title: 'Онлайн заявка для участников', link: '/members/bid' },
    ],
  },
  {
    news: true,
    pathname: 'Новости',
    info: [
      { title: 'Новости', link: '/news' },
      { title: 'Пресс-релизы', link: '' },
    ],
  },
];

interface HeaderType {
  title: string;
  link: string;
  id: number;
  one?: boolean;
}

export const headerMenu: HeaderType[] = [
  { title: 'О компании', link: '/company/aboutus', id: 1 },
  { title: 'Новости', link: '/news', id: 2 },
  { title: 'FAQ', link: '/faq', id: 3 },
  { title: 'Контакты', link: '/contacts', id: 4 },
];

export const headerMenu2: HeaderType[] = [
  { title: 'Календарь мероприятий', link: '/calendar', id: 1, one: true },
  { title: 'Участникам', link: '/members', id: 2 },
  { title: 'Посетителям', link: '', id: 3 },
  { title: 'Услуги', link: '', id: 4 },
];

interface FooterType {
  title: string;
  link: string;
}

export const footerMenu = [
  { title: 'Календарь мероприятий', link: '/calendar', one: true },
  { title: 'Участникам', link: '/members' },
  { title: 'Посетителям', link: '' },
  { title: 'Организаторам', link: '' },
];

export const footerMenu2: FooterType[] = [
  { title: 'Территория комплекса', link: '' },
  { title: 'О компании', link: '/company/aboutus' },
  { title: 'Пресс-центр', link: '' },
  { title: 'FAQ', link: '/faq' },
  { title: 'Контакты', link: '/contacts' },
  { title: 'Справочный центр', link: '' },
];

export const footerInfo: string[] = [
  '123100, Москва, Краснопресненская наб., 14',
  'Тел.: 8 (800) 707-37-99, +7 (499) 795-37-99',
  'E-mail: centr@expocentr.ru',
];

export const topMenu = [
  {
    path: 'about',
    links: [{ active: 'Главная', default: '/ О компании / Коротко нас' }],
  },
  {
    path: 'members',
    links: [
      {
        active: 'Главная',
        active2: ' / Участникам',
        default: ' / Информация для участников',
      },
    ],
  },
  {
    path: 'members/bid',
    links: [
      {
        active: 'Главная',
        default: ' / Участникам / Онлайн заявка для участников',
      },
    ],
  },
  {
    path: 'events',
    links: [
      {
        active: 'Главная ',
        default: '/ Календарь мероприятий',
      },
    ],
  },
  {
    path: 'faq',
    links: [
      {
        active: 'Главная',
        default: ' / FAQ',
      },
    ],
  },
  {
    path: 'contacts',
    links: [
      {
        active: 'Главная',
        default: ' / Контакты',
      },
    ],
  },
  {
    path: 'calendar',
    links: [
      {
        active: 'Главная',
        default: ' / Календарь мероприятий',
      },
    ],
  },
  {
    path: 'news',
    links: [
      {
        active: 'Главная',
        default: ' / Новости',
      },
    ],
  },
];
