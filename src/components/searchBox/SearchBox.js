import "./SearchBox.scss";

const SearchBox = (props) => {
  const { search, query, setQuery } = props;
  return (
    <div className="search-box-wrapper shadow-lg mb-4 bg-white">
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
