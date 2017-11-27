import React from 'react';
import Link from 'gatsby-link';

import NavbarLink from './NavbarLink';

const Navbar = () => (
  <div className="navbar">
    <h1
      style={{
        margin: 0,
        display: 'block',
        textAlign: 'center',
      }}>
      <NavbarLink to="/about" title="ABOUT US" />
      &nbsp;&nbsp;&nbsp;
      <NavbarLink to="/schedule" title="SCHEDULE" />
      &nbsp;&nbsp;&nbsp;
      <NavbarLink to="/hotels" title="HOTELS" />
      &nbsp;&nbsp;&nbsp;
      <NavbarLink to="/sonoma" title="SONOMA" />
      &nbsp;&nbsp;&nbsp;
      <NavbarLink to="/venue" title="VENUE" />
      &nbsp;&nbsp;&nbsp;
      <NavbarLink to="/registry" title="REGISTRY" />
    </h1>
  </div>
);

export default Navbar;
