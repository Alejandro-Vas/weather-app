import unixTimeToLocal from "./../../../functions/unixTimeToLocal";

const ForecastMinutely = ({ forecast }) => {
  return (
    <div>
      {forecast.minutely?.map((el, index) => {
        return index % 10 === 0 ? (
          <div key={index}>
            {unixTimeToLocal(el.dt + forecast.timezone_offset)} вероятность
            осадков {(el.precipitation * 100).toFixed()} %
          </div>
        ) : null;
      })}
    </div>
  );
};
export default ForecastMinutely;
