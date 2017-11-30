import React from 'react';
import Link from 'gatsby-link';

import NavbarLink from './NavbarLink';

import config from '../utils/config';

const generateNavbar = navArray =>
  navArray.map(section => (
    <NavbarLink key={section.title} to={section.link} title={section.title} />
  ));

const Navbar = () => (
  <div className="navbar">
    <h1
      style={{
        margin: 0,
        display: 'block',
        textAlign: 'center',
      }}>
      {generateNavbar(config.navBarLinks)}
    </h1>
  </div>
);

export default Navbar;
