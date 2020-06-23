import React from 'react';

import './CardItem.scss';

const CardItem = ({ item, getItemId }) => {
  const { name, url, price, country, id } = item;
  return (
    <div
      className="card-beans"
      onClick={() => {
        getItemId(id);
        console.log(id);
      }}
    >
      <img className="img-card-beans" src={url} alt="card2"></img>
      <p className="card-text-beans">{name}</p>
      <p className="card-country-beans">{country}</p>
      <p className="card-price-beans">{price}</p>
    </div>
  );
};

export default CardItem;
