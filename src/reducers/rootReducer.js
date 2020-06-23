import { combineReducers } from 'redux';
import {
  ItemHasErrored,
  ItemIsLoading,
  bestsellers,
  coffee,
  goods,
  addItem,
} from './ItemsReducer';

export default combineReducers({
  ItemHasErrored,
  ItemIsLoading,
  bestsellers,
  coffee,
  goods,
  addItem,
});
