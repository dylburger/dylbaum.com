import React from 'react';
import Link from 'gatsby-link';

import generateVenueMap from './generateVenueMap';

class VenueMap extends React.Component {
  componentDidMount() {
    generateVenueMap();
  }

  render() {
    return (
      <div
        id="venuemap"
        style={{
          height: '180px',
        }}
      />
    );
  }
}

export default VenueMap;
