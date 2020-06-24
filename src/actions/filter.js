const search = (searchStr) => ({
  type: 'SEARCH',
  payload: searchStr,
});

const clickCountry = (country) => ({
  type: 'SET_COUNTRY',
  country,
});

export { search, clickCountry };
