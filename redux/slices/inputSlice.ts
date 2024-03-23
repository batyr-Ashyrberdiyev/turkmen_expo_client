import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Types {
  inputStatus: 'all' | 'events' | 'news';
}

const initialState: Types = {
  inputStatus: 'all',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInputStatus(state, action) {
      state.inputStatus = action.payload;
    },
  },
});

export const selectInput = (state: RootState) => state.inputSlice;

export const { setInputStatus } = inputSlice.actions;

export default inputSlice.reducer;
