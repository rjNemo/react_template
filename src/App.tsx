import React, { FC } from 'react';

import Router from './Router';
import { Layout } from './components/layout';

const App: FC = () => (
  <Layout>
    <Router />
  </Layout>
);

export default App;
