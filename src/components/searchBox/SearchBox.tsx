import { Button } from "react-bootstrap";

import defaultCitiesFullList from "../../resources/data/defaultCitiesFullList.json";
import "./SearchBox.scss";

import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useGetWeatherQuery } from "../../store/weather/weatherApi";

interface IProps {
  queryValue: string;
  setQueryValue: (value: string) => void;
  loading: boolean;
}

const SearchBox: React.FC<IProps> = (props) => {
  const { loading, queryValue, setQueryValue } = props;

  const { setQuery, setCoordinates } = useActions();
  const query = useTypedSelector((state) => state.query.value);
  const { data: weather } = useGetWeatherQuery(query);
  const coordinates = useTypedSelector((state) => state.coordinates.value);
  console.log(coordinates);

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (queryValue !== "") {
      setQuery(queryValue);
      setTimeout(
        () => setCoordinates([weather?.coord?.lon, weather?.coord?.lat]),
        300
      );
    }
  };

  const onBlurSearch = () => {
    if (queryValue !== "") {
      setQuery(queryValue);
      setTimeout(
        () => setCoordinates([weather?.coord?.lon, weather?.coord?.lat]),
        300
      );
    }
  };

  const btnClassName = loading
    ? "shadow align-items-center disabled"
    : "shadow align-items-center";
  return (
    <div className="input-group-prepend mb-4 ">
      <form onSubmit={onSearch} className="d-flex">
        <label className="search-box-label shadow align-items-center">
          <input
            list="city-options"
            id="city-choice"
            name="city"
            className="search-bar input-group-text"
            placeholder="Введите название города"
            type="text"
            value={queryValue}
            onChange={(event) => setQueryValue(event.target.value)}
            onBlur={onBlurSearch}
          />
          <datalist id="city-options">
            {defaultCitiesFullList.cities.map((el) => {
              return <option value={el} key={el} />;
            })}
          </datalist>
        </label>
        <Button type="submit" className={btnClassName}>
          Поиск
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
