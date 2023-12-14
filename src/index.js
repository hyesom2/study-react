import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css';
import './normalize.css';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);