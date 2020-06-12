import React from 'react';
import Header from '../Header';

import './App.scss';
import MainTitle from '../MainTitle';
import MainContent from '../MainContent';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <MainTitle />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
