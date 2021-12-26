import "./SearchBox.scss";

const SearchBox = (props) => {
  const { onSearch, query, setQuery } = props;
  return (
    <div className="search-box-wrapper shadow-lg mb-4 bg-white">
      <form onSubmit={onSearch}>
        <label>
          <input
            list="city-options"
            id="city-choice"
            name="city"
            ref={(input) => input && input.focus()}
            className="search-bar"
            placeholder="Введие название города"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <datalist id="city-options">
            <option value="Киров" />
            <option value="Нижний Новгород" />
            <option value="Шарья" />
          </datalist>
        </label>
        <input type="submit" value="Поиск" />
      </form>
    </div>
  );
};

export default SearchBox;
