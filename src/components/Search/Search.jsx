import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { search, clickCountry } from '../../actions/filter';

import './Search.scss';

const Search = () => {
  const dispatch = useDispatch();
  const onInput = useCallback((e) => dispatch(search(e.target.value)), [
    dispatch,
  ]);
  const onClick = useCallback(
    (e) => {
      dispatch(clickCountry(e.target.value));
      console.log(e.target.value);
    },
    [dispatch]
  );

  return (
    <div className="container-search">
      <div className="search">
        <span className="span-search">Looking for</span>
        <input
          className="input-search"
          placeholder="start typing here"
          onInput={onInput}
        />
      </div>
      <div className="filter">
        <span className="span-filter">Or filter</span>
        <button className="btn-filter" onClick={onClick} value="Brazil">
          Brazil
        </button>
        <button className="btn-filter" onClick={onClick} value="Kenya">
          Kenya
        </button>
        <button className="btn-filter" onClick={onClick} value="Columbia">
          Columbia
        </button>
      </div>
    </div>
  );
};

export default Search;
