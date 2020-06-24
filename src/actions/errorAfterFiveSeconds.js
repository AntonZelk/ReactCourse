import { itemHasErrored } from './ItemHasErrored';

const errorAfterFiveSeconds = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(itemHasErrored(true));
    }, 5000);
  };
};
export { errorAfterFiveSeconds };
