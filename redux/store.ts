import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "./slices/headerSlice";
import homeSlice from "./slices/homeSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { headerSlice, homeSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
