import React from 'react';
import Header from '../../components/Header';
import CardDetails from '../../components/CardDetails';
import Footer from '../../components/Footer';
import { withRouter } from 'react-router-dom';

import './CoffeeDetailPage.scss';

const CoffeeDetailPage = ({ coffee, match }) => {
  return (
    <div>
      <Header imgClass={'header-our-coffee'} title={'Our Coffee'} />
      <CardDetails coffee={coffee} />
      <Footer />
    </div>
  );
};

export default withRouter(CoffeeDetailPage);
