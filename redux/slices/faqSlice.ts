import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Props {
  status: string;
}

const initialState: Props = {
  status: "all",
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const selectFaq = (state: RootState) => state.faqSlice;

export const { setStatus } = faqSlice.actions;

export default faqSlice.reducer;
