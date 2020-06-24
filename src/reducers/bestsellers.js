const initialState = {
  bestsellers: [],
};

const bestsellers = (state = initialState, action) => {
  switch (action.type) {
    case 'BEST_FETCH_DATA_SUCCESS':
      return { bestsellers: action.bestsellers };

    default:
      return state;
  }
};

export { bestsellers };
