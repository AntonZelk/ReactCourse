import React from 'react';
import Header from '../../components/Header';
import AboutOurBeans from '../../components/AboutOurBeans';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

import './GoodsPage.scss';

const GoodsPage = ({ goods, hasErrored, isLoading, selectedItem }) => {
  return (
    <div>
      <Header imgClass={'header-our-goods'} title={'For your pleasure'} />
      <AboutOurBeans
        titleAbout={'About our goods'}
        imgAbout={'./img/about-our-goods.png'}
      />
      <Cards
        items={goods}
        hasErrored={hasErrored}
        isLoading={isLoading}
        selectedItem={selectedItem}
      />
      <Footer />
    </div>
  );
};

export default GoodsPage;
