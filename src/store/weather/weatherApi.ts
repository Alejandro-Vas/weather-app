import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather } from "../../interfaces/IWeather";
import apiKey from "../../services/apiKey";

export const weatherApi = createApi({
  reducerPath: "api/weather",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query<IWeather, string>({
      query: (query = "Киров") =>
        `weather?q=${query}&units=metric&appid=${apiKey}&lang=ru`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
