const initialState = {
  bestsellers: [],
  coffee: [],
  goods: [],
  itemId: [],
};

const ItemHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

const ItemIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

const bestsellers = (state = initialState, action) => {
  switch (action.type) {
    case 'BEST_FETCH_DATA_SUCCESS':
      return { bestsellers: action.bestsellers };

    default:
      return state;
  }
};
const coffee = (state = initialState, action) => {
  switch (action.type) {
    case 'COFFEE_FETCH_DATA_SUCCESS':
      return { coffee: action.coffee };

    default:
      return state;
  }
};
const goods = (state = initialState, action) => {
  switch (action.type) {
    case 'GOODS_FETCH_DATA_SUCCESS':
      return { goods: action.goods };

    default:
      return state;
  }
};

const addItem = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_ID':
      return { itemId: action.payload };

    default:
      return state;
  }
};

export { ItemHasErrored, ItemIsLoading, bestsellers, coffee, goods, addItem };
