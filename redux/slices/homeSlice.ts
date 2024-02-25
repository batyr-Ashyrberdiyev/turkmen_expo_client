import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface homeTypes {
  eventBtn: boolean;
  activeTitle: string;
}

const initialState: homeTypes = {
  eventBtn: false,
  activeTitle: "О компании",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEventBtn(state, action: PayloadAction<boolean>) {
      state.eventBtn = action.payload;
    },
    setActiveTitle(state, action: PayloadAction<string>) {
      state.activeTitle = action.payload;
    },
  },
});

export const selectHome = (state: RootState) => state.homeSlice;

export const { setEventBtn, setActiveTitle } = homeSlice.actions;

export default homeSlice.reducer;
