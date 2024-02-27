import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface HeaderState {
  menu: {
    title: string;
    link: string;
    id: number;
  }[];
  menu2: {
    title: string;
    link: string;
    id: number;
  }[];
  activeLang: "Ру" | "Tu" | "En";
  footerMenu: {
    title: string;
    link: string;
  }[];
  footerMenu2: string[];
  showInput: boolean;
}

const initialState: HeaderState = {
  activeLang: "Ру",
  showInput: false,
  menu: [
    { title: "О компании", link: "/company/aboutus", id: 1 },
    { title: "Новости", link: "/", id: 2 },
    { title: "FAQ", link: "/faq", id: 3 },
    { title: "Контакты", link: "/contacts", id: 4 },
  ],
  menu2: [
    { title: "Календарь мероприятий", link: "/", id: 1 },
    { title: "Участникам", link: "/members", id: 2 },
    { title: "Посетителям", link: "/", id: 3 },
    { title: "Услуги", link: "/", id: 4 },
  ],

  footerMenu: [
    { title: "Территория комплекса", link: "/" },
    { title: "О компании", link: "/company/aboutus" },
    { title: "Пресс-центр", link: "/" },
    { title: "FAQ", link: "/faq" },
    { title: "Контакты", link: "/" },
    { title: "Справочный центр", link: "/" },
  ],
  footerMenu2: [
    "123100, Москва, Краснопресненская наб., 14",
    "Тел.: 8 (800) 707-37-99, +7 (499) 795-37-99",
    "E-mail: centr@expocentr.ru",
  ],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setActiveLang(state, action) {
      state.activeLang = action.payload;
    },
    setShowInput(state, action) {
      state.showInput = action.payload;
    },
  },
});

export const selectHeader = (state: RootState) => state.headerSlice;

export const { setActiveLang, setShowInput } = headerSlice.actions;

export default headerSlice.reducer;
