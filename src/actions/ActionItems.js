const ItemHasErrored = (bool) => {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool,
  };
};

const ItemIsLoading = (bool) => {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool,
  };
};
const bestFetchDataSuccess = (bestsellers) => {
  return {
    type: 'BEST_FETCH_DATA_SUCCESS',
    bestsellers,
  };
};
const coffeeFetchDataSuccess = (coffee) => {
  return {
    type: 'COFFEE_FETCH_DATA_SUCCESS',
    coffee,
  };
};
const goodsFetchDataSuccess = (goods) => {
  return {
    type: 'GOODS_FETCH_DATA_SUCCESS',
    goods,
  };
};

const errorAfterFiveSeconds = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(ItemHasErrored(true));
    }, 5000);
  };
};

const ItemFetchData = (url, flag) => {
  return (dispatch) => {
    dispatch(ItemIsLoading(true));

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(ItemIsLoading(false));

        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (flag === 'bestsellers') {
          dispatch(bestFetchDataSuccess(res));
        } else if (flag === 'coffee') {
          dispatch(coffeeFetchDataSuccess(res));
        } else if (flag === 'goods') {
          dispatch(goodsFetchDataSuccess(res));
        }
      })
      .catch(() => dispatch(ItemHasErrored(true)));
  };
};
const getItemId = (id) => {
  return {
    type: 'GET_ITEM_ID',
    payload: id,
  };
};

export {
  ItemHasErrored,
  ItemIsLoading,
  bestFetchDataSuccess,
  coffeeFetchDataSuccess,
  goodsFetchDataSuccess,
  errorAfterFiveSeconds,
  ItemFetchData,
  getItemId,
};
