import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Props {
  contactTitle: string;
  activeMenu: string;
}

const initialState: Props = {
  contactTitle: "",
  activeMenu: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setActiveMenu(state, action: PayloadAction<string>) {
      state.activeMenu = action.payload;
    },
    setContactTitle(state, action: PayloadAction<string>) {
      state.contactTitle = action.payload;
    },
  },
});

export const selectContacts = (state: RootState) => state.contactsSlice;

export const { setActiveMenu, setContactTitle } = contactsSlice.actions;

export default contactsSlice.reducer;
