import React, { Component } from 'react';
import Header1 from '../Header1';
import AboutOurBeans from '../AboutOurBeans';
import MainTitle from '../MainTitle';
import MainContent from '../MainContent';
import Footer from '../Footer';
import CardsBestsellers from '../CardsBestsellers';
import Search from '../Search';
import CardsCoffee from '../CardsCoffee';
import CardDetails from '../CardDetails';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { bestFetchData } from '../../actions/ActionBestseller';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchBestsellers('http://localhost:5000/bestsellers');
    this.props.fetchCoffee('http://localhost:5000/coffee');
  }

  render() {
    const { bestsellers, coffee, hasErrored, isLoading } = this.props;
    return (
      <div className="app">
        <Header1 />
        <AboutOurBeans />
        <Search />
        <CardsCoffee
          coffee={coffee}
          hasErrored={hasErrored}
          isLoading={isLoading}
        />
        <CardDetails />
        <MainTitle />
        <MainContent />
        <CardsBestsellers
          bestsellers={bestsellers}
          hasErrored={hasErrored}
          isLoading={isLoading}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffee: state.coffee,
    bestsellers: state.bestsellers,
    hasErrored: state.bestHasErrored,
    isLoading: state.bestIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBestsellers: (url) => dispatch(bestFetchData(url, 'bestsellers')),
    fetchCoffee: (url) => dispatch(bestFetchData(url, 'coffee')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
