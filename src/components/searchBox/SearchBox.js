const SearchBox = (props) => {
  const { search, query, setQuery } = props;
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Введие название города"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
};

export default SearchBox;
