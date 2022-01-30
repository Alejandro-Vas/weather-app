import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IForecast } from "../../interfaces/IForecast";
import apiKey from "../../services/apiKey";

export const forecastApi = createApi({
  reducerPath: "api/forecast",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getForecast: builder.query<IForecast, string>({
      query: (query) =>
        `weather?q=${query}&units=metric&appid=${apiKey}&lang=ru`,
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
