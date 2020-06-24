import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import CoffeePage from '../../pages/CoffeePage';
import GoodsPage from '../../pages/GoodsPage';
import CoffeeDetailPage from '../../pages/CoffeeDetailPage';
import GoodsDetailPage from '../../pages/GoodsDetailPage';
import { itemFetchData } from '../../actions/itemFetchData';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemFetchData('http://localhost:5000/bestsellers'));
    dispatch(itemFetchData('http://localhost:5000/coffee'));
    dispatch(itemFetchData('http://localhost:5000/goods'));
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/coffee" component={CoffeePage} exact />
          <Route path="/coffee/:id" component={CoffeeDetailPage} />
          <Route path="/goods" component={GoodsPage} exact />
          <Route path="/goods/:id" component={GoodsDetailPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
