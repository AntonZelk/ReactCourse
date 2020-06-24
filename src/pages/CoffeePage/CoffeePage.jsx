import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import AboutOurBeans from '../../components/AboutOurBeans';
import Search from '../../components/Search';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';
import { selectCoffee } from '../../selectors/ItemsSelector';

import './CoffeePage.scss';

const CoffeePage = () => {
  const coffee = useSelector(selectCoffee);

  return (
    <div>
      <Header imgClass={'header-our-coffee'} title={'Our Coffee'} />
      <AboutOurBeans
        titleAbout={'About our beans'}
        imgAbout={'./img/about-our-beans.png'}
      />
      <Search />
      <Cards items={coffee} />
      <Footer />
    </div>
  );
};

export default CoffeePage;
