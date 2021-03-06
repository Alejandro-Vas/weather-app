import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IForecast } from "../../interfaces/IForecast";

import apiKey from "../apiKey";

export const forecastApi = createApi({
  reducerPath: "api/forecast",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getForecast: builder.query<IForecast, number[]>({
      query: (coordinates) => {
        return `onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${apiKey}&lang=ru&units=metric`;
      },
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
