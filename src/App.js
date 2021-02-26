import './app.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import HeaderNav from './components/HeaderNav/';
import HeaderNav from './components/HeaderNav/';
import HomePage from './content/HomePage/';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/repos" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
