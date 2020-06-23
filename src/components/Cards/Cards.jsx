import React from 'react';
import Spinner from '../Spinner';
import CardItem from '../CardItem';

import './Cards.scss';

const Cards = ({ items, hasErrored, isLoading, getItemId }) => {
  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container-cards-beans">
      {items.map((item) => {
        return <CardItem item={item} key={item.id} getItemId={getItemId} />;
      })}
    </div>
  );
};

export default Cards;
