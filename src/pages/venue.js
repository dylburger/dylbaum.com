import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const Venue = () => (
  <div>
    <PageTitle title="Venue" />
    <p>
      The ceremony and reception will be held at{' '}
      <a href={config.venue.webAddr}>{config.venue.title}</a>:
    </p>
    <p>{config.venue.physicalAddr}</p>
    <p>
      Directions to the venue can be found on{' '}
      <a href={config.venue.googleMapsLink}>Google Maps</a>.
    </p>
    <p>{config.venue.drivingNotes}</p>
  </div>
);

export default Venue;
