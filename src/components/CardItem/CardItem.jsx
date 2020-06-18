import React from 'react';

import './CardItem.scss';

const CardItem = (props) => {
  const { item } = props;
  const { name, url, price } = item;
  return (
    <div className="card">
      <img className="img-card" src={url} alt="card1"></img>
      <p className="card-text">{name}</p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default CardItem;
