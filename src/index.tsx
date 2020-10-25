import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './core/theme';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query ListAll {
        listTodos {
          todoId
          title
          isDone
        }
      }
    `
  })
  .then((res) => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
