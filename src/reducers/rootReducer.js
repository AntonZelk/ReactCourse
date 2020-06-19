import { combineReducers } from 'redux';
import {
  bestHasErrored,
  bestIsLoading,
  bestsellers,
  coffee,
  goods,
} from './BestsellerReducer';

export default combineReducers({
  bestHasErrored,
  bestIsLoading,
  bestsellers,
  coffee,
  goods,
});
