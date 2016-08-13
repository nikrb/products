import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Bootstrap from 'bootstrap-without-jquery';

import Layout from './pages/Layout';
import Purchase from './pages/Purchase';
import Products from './pages/Products';
import Settings from './pages/Settings';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Products} ></IndexRoute>
      <Route path="purchase" name="purchase" component={Purchase} ></Route>
      <Route path="settings" name="settings" component={Settings} ></Route>
    </Route>
  </Router>,
app);
