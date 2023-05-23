import React, { useState } from 'react';
import SearchBar from './SearchBar';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:3000/search?fileName=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    await handleSearch(value);
  };

  const generateFileLink = (filePath) => {
    return `file://${filePath}`;
  };

  return (
      <div>
        <SearchBar onChange={handleChange} />
        <ul>
          {searchResults.map((result, index) => (
              <li key={index}>
                <a href={generateFileLink(result)} target="_blank" rel="noopener noreferrer">
              {result}
            </a>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default SearchPage;