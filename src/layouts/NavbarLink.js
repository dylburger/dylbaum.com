import React from 'react';
import {string} from 'prop-types';
import Link from 'gatsby-link';

const NavbarLink = ({to, title}) => (
  <Link
    to={to}
    style={{
      color: '#001f3f',
      textDecoration: 'none',
      fontSize: '13px',
    }}
    activeStyle={{
      color: '#D95E39',
    }}>
    {title}
  </Link>
);

NavbarLink.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
};

export default NavbarLink;
