import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './core/theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
