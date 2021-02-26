import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <header className="nav-header">
    <h1>New York &amp; Michigan Solutions Journalism</h1>
    <div className="lang-select">
      <Link to="">English</Link>
      <Link to="">Español</Link>
    </div>
  </header>
);

export default HeaderNav;
