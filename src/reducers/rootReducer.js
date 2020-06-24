import { combineReducers } from 'redux';
import {
  ItemHasErrored,
  ItemIsLoading,
  bestsellers,
  coffee,
  goods,
  addItem,
  search,
  clickCountry,
} from './ItemsReducer';

export default combineReducers({
  ItemHasErrored,
  ItemIsLoading,
  bestsellers,
  coffee,
  goods,
  addItem,
  search,
  clickCountry,
});
