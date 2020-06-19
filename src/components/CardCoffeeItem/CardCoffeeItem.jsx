import React from 'react';

import './CardCoffeeItem.scss';

const CardCoffeeItem = (props) => {
  const { item } = props;
  const { name, url, price, country } = item;
  return (
    <div className="card-beans">
      <img className="img-card-beans" src={url} alt="card2"></img>
      <p className="card-text-beans">{name}</p>
      <p className="card-country-beans">{country}</p>
      <p className="card-price-beans">{price}</p>
    </div>
  );
};

export default CardCoffeeItem;
