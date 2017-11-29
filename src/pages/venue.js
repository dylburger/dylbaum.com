import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import VenueMap from './VenueMap';

const Venue = () => (
  <div>
    <h1>Venue</h1>
    <p>
      The ceremony and reception will be held at{' '}
      <a href={config.venue.webAddr}>{config.venue.title}</a>.
    </p>
    <p>
      Directions to the venue can be found on{' '}
      <a href={config.venue.googleMapsLink}>Google Maps</a>.
    </p>
    <VenueMap />
  </div>
);

export default Venue;
