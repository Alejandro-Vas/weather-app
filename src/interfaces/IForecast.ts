interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherEntity[] | null;
}
interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface MinutelyEntity {
  dt: number;
  precipitation: number;
}
export interface HourlyEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather?: WeatherEntity[] | null;
  pop: number;
}
interface DailyEntity {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather?: WeatherEntity[] | null;
  clouds: number;
  pop: number;
  uvi: number;
  snow?: number | null;
}
interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}
interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface IForecast {
  lat?: number;
  lon?: number;
  timezone?: string;
  timezone_offset?: number;
  current?: Current;
  minutely?: MinutelyEntity[] | null;
  hourly?: HourlyEntity[] | null;
  daily?: DailyEntity[] | null;
}
