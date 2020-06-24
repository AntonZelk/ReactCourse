const getItemId = (id) => {
  return {
    type: 'GET_ITEM_ID',
    payload: id,
  };
};

export { getItemId };
