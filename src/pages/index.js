import React from 'react';
import Link from 'gatsby-link';

import dyl from './dyl.png';
import lauren from './lauren.png';

const IndexPage = () => (
  <div>
    <h1
      style={{
        fontFamily: "'Courgette', cursive",
        fontSize: '60px',
      }}>
      Lauren & Dylan
    </h1>
    <p
      style={{
        fontWeight: 'bold',
        fontSize: '30px',
      }}>
      9/15/2018
    </p>
    <p
      style={{
        fontWeight: 'bold',
        fontSize: '30px',
      }}>
      Sebastopol, CA
    </p>
    <img src={lauren} alt="Lauren" />
    <img src={dyl} alt="Dylan" />
  </div>
);

export default IndexPage;
