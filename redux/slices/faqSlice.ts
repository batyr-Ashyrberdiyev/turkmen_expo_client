import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Props {
  faqStatus: string;
  faqTitle: string;
  faqInfo: string;
}

const initialState: Props = {
  faqStatus: 'all',
  faqTitle: '',
  faqInfo: '',
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setFaqStatus(state, action: PayloadAction<string>) {
      state.faqStatus = action.payload;
    },
    setFaqTitle(state, action: PayloadAction<string>) {
      state.faqTitle = action.payload;
    },
    setFaqInfo(state, action: PayloadAction<string>) {
      state.faqInfo = action.payload;
    },
  },
});

export const selectFaq = (state: RootState) => state.faqSlice;

export const { setFaqStatus, setFaqTitle, setFaqInfo } = faqSlice.actions;

export default faqSlice.reducer;
