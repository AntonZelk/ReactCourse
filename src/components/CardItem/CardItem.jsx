import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getItemId } from '../../actions/getItemId';

import './CardItem.scss';

const CardItem = ({ item }) => {
  const { name, url, price, country, id } = item;
  const history = useHistory();
  const onClick = useCallback(() => {
    getItemId(id);
    history.push(`${history.location.pathname}/${id}`);
  }, [history, id]);

  return (
    <div className="card-beans" onClick={onClick}>
      <img className="img-card-beans" src={url} alt="card2"></img>
      <p className="card-text-beans">{name}</p>
      <p className="card-country-beans">{country}</p>
      <p className="card-price-beans">{price}</p>
    </div>
  );
};

export default CardItem;
