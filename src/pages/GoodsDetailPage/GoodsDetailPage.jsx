import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import Footer from '../../components/Footer';
import { selectGoods } from '../../selectors/ItemsSelector';

import './GoodsDetailPage.scss';

const GoodsDetailPage = () => {
  const { id } = useParams();
  const goods = useSelector(selectGoods);
  const good = useMemo(() => goods.find((item) => item.id === +id), [
    goods,
    id,
  ]);

  return (
    <div>
      <Header imgClass={'header-our-goods'} title={'For your pleasure'} />
      <CardDetails item={good} />
      <Footer />
    </div>
  );
};

export default GoodsDetailPage;
