import {string} from 'prop-types';
import React from 'react';

import config from '../utils/config';

const PageTitle = ({title}) => (
  <h1
    style={{
      fontFamily: "'Euphoria Script', cursive",
      fontSize: '70px',
      color: config.site.textColor,
    }}>
    {title}
  </h1>
);

PageTitle.propTypes = {
  title: string,
};

export default PageTitle;
