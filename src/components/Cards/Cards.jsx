import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Spinner from '../Spinner';
import CardItem from '../CardItem';
import {
  selectItemHasErrored,
  selectItemIsLoading,
  selectSearchStr,
  selectCountryBtn,
} from '../../selectors/ItemsSelector';

import './Cards.scss';

const Cards = ({ items }) => {
  const searchStr = useSelector(selectSearchStr);
  const countryBtn = useSelector(selectCountryBtn);
  const hasErrored = useSelector(selectItemHasErrored);
  const isLoading = useSelector(selectItemIsLoading);
  const { pathname } = useLocation();

  const arr = useMemo(
    () =>
      pathname === '/coffee'
        ? items.filter((item) => item.country.match(countryBtn))
        : items,
    [items, pathname, countryBtn]
  );

  if (hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container-cards-beans">
      {arr.map((item) => {
        return <CardItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Cards;
