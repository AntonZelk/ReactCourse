import React from 'react';
import Spinner from '../Spinner';
import CardBestsellerItem from '../CardBestsellerItem';

import './CardsBestsellers.scss';

const CardsBestsellers = ({ bestsellers, isLoading, hasErrored }) => {
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
