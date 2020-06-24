import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import CardBestsellerItem from '../CardBestsellerItem';
import {
  selectBestsellers,
  selectItemHasErrored,
  selectItemIsLoading,
} from '../../selectors/ItemsSelector';

import './CardsBestsellers.scss';

const CardsBestsellers = () => {
  const bestsellers = useSelector(selectBestsellers);
  const isLoading = useSelector(selectItemIsLoading);
  const hasErrored = useSelector(selectItemHasErrored);

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container-cards">
      <img className="img-back" src="./img/cards-back.png" alt="back"></img>
      <h2 className="about-our">Our best</h2>
      <div className="cards">
        {bestsellers.map((bestseller) => {
          return (
            <CardBestsellerItem bestseller={bestseller} key={bestseller.id} />
          );
        })}
      </div>
    </div>
  );
};

export default CardsBestsellers;
