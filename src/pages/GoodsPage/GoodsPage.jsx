import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import AboutOurBeans from '../../components/AboutOurBeans';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { selectGoods } from '../../selectors/ItemsSelector';

import './GoodsPage.scss';

const GoodsPage = () => {
  const goods = useSelector(selectGoods);

  return (
    <div>
      <Header imgClass={'header-our-goods'} title={'For your pleasure'} />
      <AboutOurBeans
        titleAbout={'About our goods'}
        imgAbout={'./img/about-our-goods.png'}
      />
      <Cards items={goods} />
      <Footer />
    </div>
  );
};

export default GoodsPage;
