const goodsFetchDataSuccess = (goods) => {
  return {
    type: 'GOODS_FETCH_DATA_SUCCESS',
    goods,
  };
};
export { goodsFetchDataSuccess };
