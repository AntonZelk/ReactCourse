import React from 'react';

import './CardBestsellerItem.scss';

const CardBestsellerItem = (props) => {
  const { bestseller } = props;
  const { name, url, price } = bestseller;
  return (
    <div className="card">
      <img className="img-card" src={url} alt="card1"></img>
      <p className="card-text">{name}</p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default CardBestsellerItem;
