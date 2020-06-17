import React from 'react';

import './Search.scss';

const Search = () => {
  return (
    <div className="container-search">
      <div className="search">
        <span className="span-search">Lookiing for</span>
        <input className="input-search" placeholder="start typing here"></input>
      </div>
      <div className="filter">
        <span className="span-filter">Or filter</span>
        <button className="btn-filter">Brazil</button>
        <button className="btn-filter">Kenya</button>
        <button className="btn-filter">Columbia</button>
      </div>
    </div>
  );
};

export default Search;
