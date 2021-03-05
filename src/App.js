/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the app component
 * @Exports {@component app}
 */
import './app.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderNav from './components/HeaderNav/';
import HomePage from './content/HomePage/';



function App() {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/repos" component={} /> */}
      </Switch>
      <div id="footer-clear" />
    
    </>
  );
}

export default App;
