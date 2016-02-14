import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router'

import App from './modules/app';
import LogIn from './modules/log-in/log-in-view';

const Routes = (
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={LogIn}></IndexRoute>
      </Route>
  </Router>
);

ReactDOM.render(Routes, document.body);