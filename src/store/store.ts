import { configureStore } from "@reduxjs/toolkit";
import querySlice from "./query/querySlice";
import coordinatesSlice from "./coordinates/coordinatesSlice";
import { weatherApi } from "./weather/weatherApi";
import { forecastApi } from "./forecast/forecastApi";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [forecastApi.reducerPath]: forecastApi.reducer,
    query: querySlice.reducer,
    coordinates: coordinatesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi.middleware)
      .concat(forecastApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
