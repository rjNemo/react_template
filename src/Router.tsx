import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';

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
