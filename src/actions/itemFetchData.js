import { bestFetchDataSuccess } from './bestFetchDataSuccess';
import { coffeeFetchDataSuccess } from './coffeeFetchDataSuccess';
import { goodsFetchDataSuccess } from './goodsFetchDataSuccess';
import { itemHasErrored } from './itemHasErrored';
import { itemIsLoading } from './itemIsLoading';

const itemFetchData = (url, flag) => {
  return (dispatch) => {
    dispatch(itemIsLoading(true));

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }

        dispatch(itemIsLoading(false));

        return res.json();
      })
      .then((res) => {
        if (url.match('bestsellers')) {
          dispatch(bestFetchDataSuccess(res));
        } else if (url.match('coffee')) {
          dispatch(coffeeFetchDataSuccess(res));
        } else if (url.match('goods')) {
          dispatch(goodsFetchDataSuccess(res));
        }
      })
      .catch(() => dispatch(itemHasErrored(true)));
  };
};

export { itemFetchData };
