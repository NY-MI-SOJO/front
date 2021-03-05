/**
 * @author Adit Garg <adit.garg21k@gmail.com>
 * @description Generates the HeaderNav Component
 * @Exports {@component HeaderNav}
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const HeaderNav = () => (
  <header className="nav-header">
    <h1>New York &amp; Michigan Solutions Journalism</h1>
    
    <div className="lang-select">
      <Link to="">English</Link>
      <Link to="">Español</Link>
    </div>
    <nav id="right-nav">
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
    </nav>
    <nav id="left-nav">
      <HashLink to="/#Paid_Caregivers">Paid Caregivers</HashLink>
      <HashLink to="/#Unpaid_Caregivers">Unpaid Caregivers</HashLink>
    </nav>
  </header>
);

export default HeaderNav;
