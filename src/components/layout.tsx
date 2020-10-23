import React from 'react';
import { FC } from 'react';

import { Header } from './Header';

export const Layout: FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
