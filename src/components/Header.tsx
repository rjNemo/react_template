import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

export const Header = () => (
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
);
