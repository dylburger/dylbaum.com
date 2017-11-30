import React from 'react';
import Link from 'gatsby-link';
import config from '../utils/config';
import PageTitle from './PageTitle';

const Hotels = () => (
  <div>
    <PageTitle title="Hotels" />
    <p>Hotel information coming soon!</p>
    <p>
      If you&rsquo;re planning to stay in the area before or after the wedding,{' '}
      <a href={config.surroundingArea.airbnbLink}>Airbnb</a> is a great option!
    </p>
  </div>
);

export default Hotels;
