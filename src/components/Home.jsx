import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';

const Home = () => (
  <div>
    <br />
    <span
      style={{
        fontFamily: "'Euphoria Script', cursive",
        fontSize: '80px',
        fontWeight: 'bold',
        color: config.site.textColor,
        lineHeight: '1em',
      }}>
      {config.personalInfo.bride + ' & ' + config.personalInfo.groom}
    </span>
    <br />
    <br />
    <br />
    <p
      style={{
        fontWeight: 'bold',
        fontFamily: "'Dancing Script', cursive",
        fontSize: '25px',
        color: config.site.textColor,
      }}>
      {config.wedding.date}
    </p>
    <p
      style={{
        fontWeight: 'bold',
        fontSize: '25px',
        fontFamily: "'Dancing Script', cursive",
        color: config.site.textColor,
      }}>
      {config.wedding.location}
    </p>
    <img src={config.img.bridePic} alt={config.personalInfo.bride} />
    <img src={config.img.groomPic} alt={config.personalInfo.groom} />
  </div>
);

export default Home;
