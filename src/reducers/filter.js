const initialState = {
  search: '',
  country: '',
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search: action.payload };
    case 'SET_COUNTRY':
      return { ...state, country: action.country };
    default:
      return state;
  }
};

export { filter };
