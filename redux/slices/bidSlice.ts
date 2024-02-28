import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Props {
  radioStatus: string;
}

const initialState = {
  radioStatus: "",
};

const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {
    setRadioStatus(state, action) {
      state.radioStatus = action.payload;
    },
  },
});

export const selectBid = (state: RootState) => state.bidSlice;

export const { setRadioStatus } = bidSlice.actions;

export default bidSlice.reducer;
