import React from 'react';
import Header1 from '../Header1';
import AboutOurBeans from '../AboutOurBeans';
import MainTitle from '../MainTitle';
import MainContent from '../MainContent';
import Footer from '../Footer';
import Cards from '../Cards';
import Search from '../Search';
import CardsBeans from '../CardsBeans';
import CardDetails from '../CardDetails';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header1 />
      <AboutOurBeans />
      <Search />
      <CardsBeans />
      <CardDetails />
      <MainTitle />
      <MainContent />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
