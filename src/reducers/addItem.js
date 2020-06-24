const initialState = {
  itemId: [],
};

const addItem = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_ID':
      return { itemId: action.payload };

    default:
      return state;
  }
};

export { addItem };
