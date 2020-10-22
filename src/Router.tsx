import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './components/About';
import { Home } from './containers/Home';

const Router: FC = () => (
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
