import React from 'react';
import Header from '../../components/Header';
import AboutOurBeans from '../../components/AboutOurBeans';
import Search from '../../components/Search';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

import './CoffeePage.scss';

const CoffeePage = ({ coffee, hasErrored, isLoading, getItemId }) => {
  return (
    <div>
      <Header imgClass={'header-our-coffee'} title={'Our Coffee'} />
      <AboutOurBeans
        titleAbout={'About our beans'}
        imgAbout={'./img/about-our-beans.png'}
      />
      <Search />
      <Cards
        items={coffee}
        hasErrored={hasErrored}
        isLoading={isLoading}
        getItemId={getItemId}
      />
      <Footer />
    </div>
  );
};

export default CoffeePage;
