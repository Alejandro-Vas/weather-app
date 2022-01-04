import unixTimeToLocal from "./../../../functions/unixTimetoLocal";

const ForecastHourly = ({ forecast }) => {
  return (
    <>
      <div> {forecast.lat} </div>
      <div> {forecast.lon} </div>
    </>
  );
};
export default ForecastHourly;
