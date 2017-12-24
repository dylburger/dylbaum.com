import React from 'react';
import Link from 'gatsby-link';
import config from '../utils/config';
import PageTitle from '../components/PageTitle';
import SurroundingAreaMap from '../components/SurroundingAreaMap';

const Sonoma = () => (
  <div>
    <PageTitle title={config.surroundingArea.name} />
    <p>
      If you have time, visit some of our favorite places in{' '}
      {config.surroundingArea.name}.
    </p>
    <SurroundingAreaMap />
  </div>
);

export default Sonoma;
