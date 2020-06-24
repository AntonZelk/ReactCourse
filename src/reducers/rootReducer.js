import { combineReducers } from 'redux';

import { itemHasErrored } from './itemHasErrored';
import { itemIsLoading } from './itemIsLoading';
import { bestsellers } from './bestsellers';
import { coffee } from './coffee';
import { goods } from './goods';
import { addItem } from './addItem';
import { filter } from './filter';

export default combineReducers({
  itemHasErrored,
  itemIsLoading,
  bestsellers,
  coffee,
  goods,
  addItem,
  filter,
});
