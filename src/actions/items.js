const itemsHasErrored = (bool) => {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool,
  };
};

const itemsIsLoading = (bool) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  };
};
const itemsFetchDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items,
  };
};

const errorAfterFiveSeconds = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(itemsHasErrored(true));
    }, 5000);
  };
};

const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
};

export {
  itemsHasErrored,
  itemsIsLoading,
  itemsFetchDataSuccess,
  errorAfterFiveSeconds,
  itemsFetchData,
};
