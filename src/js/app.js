import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Bootstrap from 'bootstrap-without-jquery';

import Layout from './pages/Layout';
import Favourites from './pages/Favourites';
import Todos from './pages/Todos';
import Settings from './pages/Settings';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout} >
      <IndexRoute component={Todos} ></IndexRoute>
      <Route path="favourites" name="favourites" component={Favourites} ></Route>
      <Route path="settings" name="settings" component={Settings} ></Route>
    </Route>
  </Router>,
app);
