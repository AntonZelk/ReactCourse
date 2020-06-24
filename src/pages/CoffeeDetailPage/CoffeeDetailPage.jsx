import React, { useMemo } from 'react';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCoffee } from '../../selectors/ItemsSelector';

import './CoffeeDetailPage.scss';

const CoffeeDetailPage = () => {
  const { id } = useParams();
  const coffee = useSelector(selectCoffee);
  const cof = useMemo(() => coffee.find((item) => item.id === +id), [
    coffee,
    id,
  ]);

  return (
    <div>
      <Header imgClass={'header-our-coffee'} title={'Our Coffee'} />
      <CardDetails item={cof} />
      <Footer />
    </div>
  );
};

export default CoffeeDetailPage;
