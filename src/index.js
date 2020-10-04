import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import GlobalStyles from './globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
