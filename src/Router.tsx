import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import profileImg from './assets/about/profile.jpg';

const Router: FC = () => (
  <Switch>
    <Route exact path="/">
      <div>Hello</div>
    </Route>
    <Route exact path="/about">
      <div>
        <h1>About</h1>
        <div>
          <img src={profileImg} alt="profile" width="100%" />
        </div>
      </div>
    </Route>
  </Switch>
);

export default Router;
