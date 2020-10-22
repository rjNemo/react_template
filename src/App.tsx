import React, { FC } from 'react';

import Router from './Router';
import { Header } from './components/Header';

const App: FC = () => (
  <>
    <Header />
    <Router />
  </>
);

export default App;
