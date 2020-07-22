import React, { useState } from 'react';
import './Header.css';

function Header() {
  let [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchInput = document.getElementById('searchTermInput')
    console.log(searchInput.value)
    setSearchTerm(searchInput.value);
  }

  return (
    <header id="header">
      <h1>Photos</h1>
      <form id="image-search-form" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Seach for images..." name="searchTermInput" id="searchTermInput"></input>
        <button type="submit">Search</button>
      </form>
    </header>
  )
}

export default Header;