import React, { useState } from 'react'

const Search = (props) => {
  const [search, setSearch] = useState('');

  const updateSearch = () => {
    props.updateSearch(search);
    props.updateMode(true);
  }

  const updateSearchInput = (e) => {
    if (e.key === 'Enter') {
      updateSearch();
    }
  }

  return (
    <div className='search-container'>
      <input type="text" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => updateSearchInput(e)} />
      <i className="material-icons" onClick={() => updateSearch()}>
        search
      </i>
    </div>

  )
}

export default Search