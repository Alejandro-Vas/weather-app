import ShowCurrentWeather from "../components/showWeather/showCurrentWeather/ShowCurrentWeather";

const MainPage = ({ query, setQuery }) => {
  return (
    <>
      <ShowCurrentWeather query={query} setQuery={setQuery} />
    </>
  );
};

export default MainPage;
