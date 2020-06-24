const itemHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
};

export { itemHasErrored };
