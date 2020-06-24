import React from 'react';

import MainTitle from '../../components/MainTitle';
import MainContent from '../../components/MainContent';
import CardsBestsellers from '../../components/CardsBestsellers';
import Footer from '../../components/Footer';

import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <MainTitle />
      <MainContent />
      <CardsBestsellers />
      <Footer />
    </div>
  );
};

export default MainPage;
