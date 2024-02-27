import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "./slices/headerSlice";
import homeSlice from "./slices/homeSlice";
import contactsSlice from "./slices/contactsSlice";
import faqSlice from "./slices/faqSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { headerSlice, homeSlice, contactsSlice, faqSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
