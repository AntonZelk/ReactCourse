const itemIsLoading = (bool) => {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading: bool,
  };
};

export { itemIsLoading };
