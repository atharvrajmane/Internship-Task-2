import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="input-group w-75">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="btn btn-warning shadow-sm ms-2"
          onClick={handleSearch}
          disabled={!query.trim()}
        >
          <i className="fas fa-search"></i> Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
