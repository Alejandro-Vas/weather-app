import { useState, useEffect } from "react";

const api = {
  key: "4a988ac25507ea7c902562b2aa291b85",
  base: "https://api.openweathermap.org/data/2.5/weather?q="
};

const NowWeather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}${query}&units=metric&appid=${api.key}&lang=ru`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      <div>
        <h2></h2>
      </div>

      <div>Город: Киров </div>
      <div>Страна: Россия</div>
      <div>Облачность: 100% небольшой снег </div>
      <div>Температура: -16°</div>
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
