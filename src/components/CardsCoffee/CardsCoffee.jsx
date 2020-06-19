import React from 'react';
import Spinner from '../Spinner';
import CardCoffeeItem from '../CardCoffeeItem';

import './CardsCoffee.scss';

const CardsCoffee = ({ coffee, hasErrored, isLoading }) => {
  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container-cards-beans">
      {coffee.map((item) => {
        return <CardCoffeeItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardsCoffee;
