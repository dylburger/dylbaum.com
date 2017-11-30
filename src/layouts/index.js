import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import config from '../utils/config';

import 'typeface-euphoria-script';
import 'typeface-dancing-script';
import './index.css';

const Header = () => (
  <div
    style={{
      background: config.site.backgroundColor,
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <Navbar />
      <br />
      <hr
        style={{
          display: 'block',
          width: '70%',
          textAlign: 'center',
          borderTop: '1px solid ' + config.site.navColor,
          height: '1px',
          margin: '0 auto',
        }}
      />
    </div>
  </div>
);

const TemplateWrapper = ({children}) => {
  return (
    <div>
      <Helmet
        title={config.site.title}
        meta={[
          {
            name: 'description',
            content: config.site.description,
          },
          {name: 'keywords', content: config.site.keywords},
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          display: 'block',
          textAlign: 'center',
        }}>
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
