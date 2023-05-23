import React from 'react';

const SearchBar = ({ onChange }) => {
  return (
      <div>
        <input className="search-bar"
            type="text"
            onChange={onChange}
            placeholder="Search..." />
      </div>
  );
};

export default SearchBar;