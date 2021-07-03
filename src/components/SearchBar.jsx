import * as React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="SearchBar">
      <input
        type="text"
        autoComplete="off"
        onChange={(e) => {
          setSearchQuery(e.target.value.trim());
        }}
        placeholder="Search your favorite Pokemon"
      />
    </div>
  );
};

export default SearchBar;
