const initialState = {
  coffee: [],
};

const coffee = (state = initialState, action) => {
  switch (action.type) {
    case 'COFFEE_FETCH_DATA_SUCCESS':
      return { coffee: action.coffee };

    default:
      return state;
  }
};

export { coffee };
