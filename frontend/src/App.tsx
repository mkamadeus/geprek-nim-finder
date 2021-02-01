import React from 'react';
import { Router } from '@reach/router';
import Home from '@/pages/Home';
import Help from '@/pages/Help';

const App = () => {
  return (
    <Router basepath="/">
      <Home path="/" />
      <Help path="/help" />
    </Router>
  );
};

export default App;
