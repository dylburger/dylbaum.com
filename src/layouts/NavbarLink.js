import React from 'react';
import {string} from 'prop-types';
import Link from 'gatsby-link';

import config from '../utils/config';

const NavbarLink = ({to, title}) => (
  <Link
    to={to}
    style={{
      color: config.site.textColor,
      textDecoration: 'none',
      fontSize: '13px',
      overflowWrap: 'normal',
      marginRight: '12px',
    }}
    activeStyle={{
      color: config.site.navColor,
    }}>
    {title}
  </Link>
);

NavbarLink.propTypes = {
  to: string.isRequired,
  title: string.isRequired,
};

export default NavbarLink;
