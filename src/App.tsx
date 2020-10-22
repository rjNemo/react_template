import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Router from './Router';

const App: FC = () => (
  <div>
    <header>
      <nav>
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
