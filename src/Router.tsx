import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './containers/about';
import { Home } from './containers/home';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/about">
      <About />
    </Route>
  </Switch>
);

export default Router;
