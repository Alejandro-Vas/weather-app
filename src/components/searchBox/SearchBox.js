import defaultCitiesFullList from "../../resourses/data/defaultCitiesFullList.json";
import "./SearchBox.scss";

const SearchBox = (props) => {
  const { onSearch, query, setQuery } = props;
  return (
    <div className="search-box-wrapper shadow mb-4 bg-white">
      <form onSubmit={onSearch}>
        <label>
          <input
            list="city-options"
            id="city-choice"
            name="city"
            // ref={(input) => input && input.focus()}
            // add focus on submit

            className="search-bar"
            placeholder="Введие название города"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <datalist id="city-options">
            {defaultCitiesFullList.cities.map((el) => {
              return <option value={el} key={el} />;
            })}
          </datalist>
        </label>
        <input type="submit" value="Поиск" />
      </form>
    </div>
  );
};

export default SearchBox;
