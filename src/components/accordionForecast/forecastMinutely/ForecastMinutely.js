import unixTimeToLocal from "./../../../functions/unixTimetoLocal";

const ForecastMinutely = ({ forecast }) => {
  return (
    <div>
      {forecast.minutely?.map((el, index) => {
        return index % 10 === 0 ? (
          <div key={index}>
            {unixTimeToLocal(el.dt, true)} вероятность осадков{" "}
            {(el.precipitation * 100).toFixed()} %
          </div>
        ) : null;
      })}
    </div>
  );
};
export default ForecastMinutely;
