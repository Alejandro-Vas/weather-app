const WeatherIcon = ({ icon }) => {
  console.log(icon);
  return (
    <div>
      <img
        alt="weather icon"
        src={process.env.PUBLIC_URL + "weatherIcons/" + { icon } + ".png"}
      />
    </div>
  );
};

export default WeatherIcon;
