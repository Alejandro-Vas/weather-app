import "./SearchBox.scss";

const SearchBox = (props) => {
  const { onSearch, query, setQuery } = props;
  return (
    <div className="search-box-wrapper shadow-lg mb-4 bg-white">
      <form onSubmit={onSearch}>
        <label>
          <input
            ref={(input) => input && input.focus()}
            className="search-bar"
            placeholder="Введие название города"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Поиск" />
      </form>
    </div>
  );
};

export default SearchBox;
