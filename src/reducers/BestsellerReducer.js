const bestHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'BEST_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

const bestIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'BEST_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

const bestsellers = (state = [], action) => {
  switch (action.type) {
    case 'BEST_FETCH_DATA_SUCCESS':
      return action.bestsellers;

    default:
      return state;
  }
};
const coffee = (state = [], action) => {
  switch (action.type) {
    case 'COFFEE_FETCH_DATA_SUCCESS':
      return action.coffee;

    default:
      return state;
  }
};
const goods = (state = [], action) => {
  switch (action.type) {
    case 'GOODS_FETCH_DATA_SUCCESS':
      return action.goods;

    default:
      return state;
  }
};

export { bestHasErrored, bestIsLoading, bestsellers, coffee, goods };
