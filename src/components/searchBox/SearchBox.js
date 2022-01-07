import { Button } from "react-bootstrap";
import defaultCitiesFullList from "../../resources/data/defaultCitiesFullList.json";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { onSearch, query, setQuery } = props;
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={(e) => {
              onSearch(e);
            }}
          />
          <datalist id="city-options">
            {defaultCitiesFullList.cities.map((el) => {
              return <option value={el} key={el} />;
            })}
          </datalist>
        </label>
        <Button type="submit" className="shadow align-items-center">
          Поиск
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
