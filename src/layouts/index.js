import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from './Navbar';

import './index.css';

const Header = () => (
  <div
    style={{
      background: '#f8f8f8',
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <Navbar />
    </div>
  </div>
);

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="dylbaum.com"
      meta={[
        {
          name: 'description',
          content: 'Lauren Birnbaum and Dylan Sather wedding website',
        },
        {name: 'keywords', content: 'Lauren Birnbaum, Dylan Sather, wedding'},
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

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
