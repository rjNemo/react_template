import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Router from './Router';
import logo from './assets/logo.svg';

const App: FC = () => (
  <div>
    <header>
      <nav>
        <img src={logo} alt="logo" width="50px" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Router />
  </div>
);

export default App;
