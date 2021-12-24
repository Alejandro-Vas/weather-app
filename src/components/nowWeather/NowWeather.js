import GetWeatherService from "../../services/GetWeatherService";

const NowWeather = () => {
  GetWeatherService();
  return (
    <>
      <div>
        <h2>Погода сейчас:</h2>
      </div>

      <div>Город: Киров</div>
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
