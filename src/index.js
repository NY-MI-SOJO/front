/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description entry-point for react
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
