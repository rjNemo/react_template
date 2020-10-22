import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const Router: FC = () => (
  <Switch>
    <Route exact path="/">
      <div>Hello</div>
    </Route>
    <Route exact path="/about">
      <div>About</div>
    </Route>
  </Switch>
);

export default Router;
