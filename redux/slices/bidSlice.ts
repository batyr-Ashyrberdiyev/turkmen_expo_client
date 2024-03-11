import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Props {
  radioStatus: string;
  bidStatus: boolean;
}

const initialState: Props = {
  radioStatus: "equipped",
  bidStatus: false,
};

const bidSlice = createSlice({
  name: "bid",
  initialState,
  reducers: {
    setRadioStatus(state, action) {
      state.radioStatus = action.payload;
    },
    setBidStatus(state, action) {
      state.bidStatus = action.payload;
    },
  },
});

export const selectBid = (state: RootState) => state.bidSlice;

export const { setRadioStatus, setBidStatus } = bidSlice.actions;

export default bidSlice.reducer;
