import { useState } from "react";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
};

const NowWeather = () => {
  const [query, setQuery] = useState("Киров");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        })
        .then(setLoading(false))
        .then(console.log(loading));
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Введие название города..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      Погода сейчас:
      {/* //   Город: ${res.name}

//   Облачность: ${res.clouds.all}% ${res.weather[0].description}
//   Температура: ${Math.round(weather.main.temp)}°
//   Ощущается как: ${Math.round(weather.main.feels_like)}°
//   Видимость: ${weather.visibility} метров
//   Скорость ветра: ${weather.wind.speed} м/с
//   Порывы ветра до: ${weather.wind.gust} м/с
//   Направление ветра: ${weather.wind.deg}°
//   Координаты: ${weather.coord.lat} с.ш. ${res.coord.lon} в.д
//   Восход: ${unixTimeToLocal(res.sys.sunrise)}
//   Закат: ${unixTimeToLocal(res.sys.sunset)} */}
      <div>
        <h2>Погода сейчас</h2>
      </div>
      <div>
        <h3>Город: {weather.name} </h3>
      </div>
      <div>Страна: {}</div>
      <div>Температура: {weather.name}°</div>
      <div>Ощущается как: -23°</div>
      <div>Видимость: 168 метров</div>
      <div>Скорость ветра: 4.24 м/с</div>
      <div>Порывы ветра до: 10.76 м/с</div>
      <div>Направление ветра: 185°</div>
      <div>Координаты: 58.5966 с.ш. 49.6601 в.д</div>
      <div>Восход: 8:31:57</div>
      <div>Закат: 14:49:45</div>
    </>
  );
};

export default NowWeather;
