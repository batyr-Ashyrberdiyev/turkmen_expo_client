import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface homeTypes {
  eventBtn: boolean;
}

const initialState: homeTypes = {
  eventBtn: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setEventBtn(state, action: PayloadAction<boolean>) {
      state.eventBtn = action.payload;
    },
  },
});

export const selectHome = (state: RootState) => state.homeSlice;

export const { setEventBtn } = homeSlice.actions;

export default homeSlice.reducer;
