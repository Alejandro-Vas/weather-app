import { Button } from "react-bootstrap";

import defaultCitiesFullList from "../../resources/data/defaultCitiesFullList.json";
import "./SearchBox.scss";

import useActions from "../../hooks/useActions";

interface IProps {
  queryValue: string;
  setQueryValue: (value: string) => void;
  loading: boolean;
}

const SearchBox: React.FC<IProps> = (props) => {
  const { loading, queryValue, setQueryValue } = props;

  const { setQuery } = useActions();

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (queryValue !== "") {
      setQuery(queryValue);
    }
  };

  const onBlurSearch = () => {
    if (queryValue !== "") {
      setQuery(queryValue);
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
