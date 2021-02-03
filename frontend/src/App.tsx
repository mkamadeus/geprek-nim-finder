import React from 'react';
import { Router } from '@reach/router';
import Home from '@/pages/Home';
import Help from '@/pages/Help';
import Page404 from '@/pages/Page404';

const App = () => {
  return (
    <Router basepath="/">
      <Page404 default />
      <Home path="/" />
      <Help path="help" />
    </Router>
  );
};

export default App;
