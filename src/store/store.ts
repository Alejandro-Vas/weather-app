import { configureStore } from "@reduxjs/toolkit";
import querySlice from "./query/querySlice";
import { weatherApi } from "./weather/weatherApi";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    query: querySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
