import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { getItemId } from '../../actions/ActionItems';

import './CardBestsellerItem.scss';

const CardBestsellerItem = ({ bestseller }) => {
  const { name, url, price, id } = bestseller;
  const history = useHistory();
  const onClick = useCallback(() => {
    getItemId(id);
    history.push(`/coffee/${id}`);
  }, [history, id]);

  return (
    <div className="card" onClick={onClick}>
      <img className="img-card" src={url} alt="card1"></img>
      <p className="card-text">{name}</p>
      <p className="card-price">{price}</p>
    </div>
  );
};

export default CardBestsellerItem;
