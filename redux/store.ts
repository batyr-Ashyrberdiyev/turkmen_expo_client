import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "./slices/headerSlice";
import homeSlice from "./slices/homeSlice";
import contactsSlice from "./slices/contactsSlice";
import faqSlice from "./slices/faqSlice";
import bidSlice from "./slices/bidSlice";
import inputSlice from "./slices/inputSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerSlice,
      homeSlice,
      contactsSlice,
      faqSlice,
      bidSlice,
      inputSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
