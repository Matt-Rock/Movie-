import React, { useState } from 'react';

const API_SEARCH_URL = '/search/movie?&page=1&query=';
const Search = ({ setData }) => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setData(`${API_SEARCH_URL}${text}`);
    console.log(e);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          name="serch-movie"
          id="search-movie"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
