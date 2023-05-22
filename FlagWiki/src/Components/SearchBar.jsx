import React, { useState, useEffect } from 'react';
import '../Styles/searchBar.css';

const SearchBar = () => {
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(sort);
    setSort('');
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <form className='searchBar' onSubmit={handleSubmit}>
      <input
        type="text"
        id='search'
        value={sort}
        placeholder='🔎         Search for a country...'
        className='component'
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;

