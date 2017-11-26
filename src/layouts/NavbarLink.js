import React from 'react';
import {string} from 'prop-types';
import Link from 'gatsby-link';

const NavbarLink = ({to, title}) => (
  <Link
    to={to}
    style={{
      color: 'black',
      textDecoration: 'none',
      fontSize: '13px',
    }}>
    {title}
  </Link>
);

NavbarLink.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
};

export default NavbarLink;
