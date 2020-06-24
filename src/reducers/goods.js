const initialState = {
  goods: [],
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case 'GOODS_FETCH_DATA_SUCCESS':
      return { goods: action.goods };

    default:
      return state;
  }
};

export { goods };
