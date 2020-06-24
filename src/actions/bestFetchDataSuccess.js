const bestFetchDataSuccess = (bestsellers) => {
  return {
    type: 'BEST_FETCH_DATA_SUCCESS',
    bestsellers,
  };
};

export { bestFetchDataSuccess };
