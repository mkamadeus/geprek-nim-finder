import React from 'react';
import { Router } from '@reach/router';
import Home from '~/pages/Home';
import Help from '~/pages/Help';
import Page404 from '~/pages/Page404';
import Sheets from '~/pages/Sheets';
import ThemeContextProvider from './context/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router basepath="/">
        <Page404 default />
        <Home path="/" />
        <Help path="help" />
        <Sheets path="sheets" />
      </Router>
    </ThemeContextProvider>
  );
};

export default App;
