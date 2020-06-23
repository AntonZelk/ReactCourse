import React, { Component } from 'react';
import MainPage from '../../pages/MainPage';
import CoffeePage from '../../pages/CoffeePage';
import GoodsPage from '../../pages/GoodsPage';
import CoffeeDetailPage from '../../pages/CoffeeDetailPage';
import { connect } from 'react-redux';
import { ItemFetchData, getItemId } from '../../actions/ActionItems';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

class App extends Component {
  componentDidMount() {
    const { fetchBestsellers, fetchCoffee, fetchGoods, getItemId } = this.props;

    fetchBestsellers('http://localhost:5000/bestsellers');
    fetchCoffee('http://localhost:5000/coffee');
    fetchGoods('http://localhost:5000/goods');
    getItemId(3);
  }

  render() {
    const {
      bestsellers,
      coffee,
      goods,
      hasErrored,
      isLoading,
      itemId,
      getItemId,
    } = this.props;

    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/"
              render={(props) => (
                <MainPage
                  bestsellers={bestsellers}
                  hasErrored={hasErrored}
                  isLoading={isLoading}
                />
              )}
              exact
            />

            <Route
              path="/coffee"
              render={(props) => (
                <CoffeePage
                  coffee={coffee}
                  hasErrored={hasErrored}
                  isLoading={isLoading}
                  getItemId={getItemId}
                />
              )}
              exact
            />
            <Route
              path="/coffee:id"
              render={(props) => (
                <CoffeeDetailPage
                  coffee={coffee[itemId]}
                  hasErrored={hasErrored}
                  isLoading={isLoading}
                  itemId={itemId}
                />
              )}
            />
            <Route
              path="/goods"
              render={(props) => (
                <GoodsPage
                  goods={goods}
                  hasErrored={hasErrored}
                  isLoading={isLoading}
                />
              )}
              exact
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({
  bestsellers: { bestsellers },
  coffee: { coffee },
  goods: { goods },
  addItem: { itemId },
  bestHasErrored,
  bestIsLoading,
}) => {
  return {
    itemId: itemId,
    bestsellers: bestsellers,
    coffee: coffee,
    goods: goods,
    hasErrored: bestHasErrored,
    isLoading: bestIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBestsellers: (url) => dispatch(ItemFetchData(url, 'bestsellers')),
    fetchCoffee: (url) => dispatch(ItemFetchData(url, 'coffee')),
    fetchGoods: (url) => dispatch(ItemFetchData(url, 'goods')),
    getItemId: (id) => dispatch(getItemId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
