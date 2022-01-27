import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cart/cart.slice";
import { weatherApi } from "./weather/weather-api";

export const store = configureStore({
  reducer: { [weatherApi.reducerPath]: weatherApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
