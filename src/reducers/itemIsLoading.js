const itemIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
};

export { itemIsLoading };
