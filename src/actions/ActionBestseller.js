const bestHasErrored = (bool) => {
  return {
    type: 'BEST_HAS_ERRORED',
    hasErrored: bool,
  };
};

const bestIsLoading = (bool) => {
  return {
    type: 'BEST_IS_LOADING',
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
      dispatch(bestHasErrored(true));
    }, 5000);
  };
};

const bestFetchData = (url, flag) => {
  return (dispatch) => {
    dispatch(bestIsLoading(true));

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(bestIsLoading(false));

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
      .catch(() => dispatch(bestHasErrored(true)));
  };
};

export {
  bestHasErrored,
  bestIsLoading,
  bestFetchDataSuccess,
  coffeeFetchDataSuccess,
  goodsFetchDataSuccess,
  errorAfterFiveSeconds,
  bestFetchData,
};
