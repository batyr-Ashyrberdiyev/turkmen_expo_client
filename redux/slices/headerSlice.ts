import { headerMenu, headerMenu2 } from "@/lib/data";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  menu: headerMenu,
  menu2: headerMenu2,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export const selectHeader = (state: RootState) => state.selectHeader;

export const {} = headerSlice.actions;

export default headerSlice.reducer;
