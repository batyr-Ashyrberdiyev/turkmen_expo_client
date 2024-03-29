import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface HeaderState {
  activeLang: "Ру" | "Tu" | "En";
  showInput: boolean;
  burgerMenu: boolean;
}

const initialState: HeaderState = {
  activeLang: "Ру",
  showInput: false,
  burgerMenu: false,
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
    setBurgerMenu(state, action) {
      state.burgerMenu = action.payload;
    },
  },
});

export const selectHeader = (state: RootState) => state.headerSlice;

export const { setActiveLang, setShowInput, setBurgerMenu } =
  headerSlice.actions;

export default headerSlice.reducer;
