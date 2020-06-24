const itemHasErrored = (bool) => {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored: bool,
  };
};

export { itemHasErrored };
