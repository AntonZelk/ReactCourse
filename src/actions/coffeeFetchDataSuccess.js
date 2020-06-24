const coffeeFetchDataSuccess = (coffee) => {
  return {
    type: 'COFFEE_FETCH_DATA_SUCCESS',
    coffee,
  };
};

export { coffeeFetchDataSuccess };
