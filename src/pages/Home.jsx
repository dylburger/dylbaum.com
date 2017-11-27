import React from 'react';
import Link from 'gatsby-link';

import dyl from './dyl.png';
import lauren from './lauren.png';

const Home = () => (
  <div>
    <br />
    <span
      style={{
        fontFamily: "'Euphoria Script', cursive",
        fontSize: '80px',
        color: '#001f3f',
      }}>
      Lauren & Dylan
    </span>
    <br />
    <br />
    <br />
    <p
      style={{
        fontWeight: 'bold',
        fontFamily: "'Dancing Script', cursive",
        fontSize: '25px',
        color: '#001f3f',
      }}>
      9/15/2018
    </p>
    <p
      style={{
        fontWeight: 'bold',
        fontSize: '25px',
        fontFamily: "'Dancing Script', cursive",
        color: '#001f3f',
      }}>
      Sebastopol, CA
    </p>
    <img src={lauren} alt="Lauren" />
    <img src={dyl} alt="Dylan" />
  </div>
);

export default Home;
