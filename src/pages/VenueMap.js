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
          height: '400px',
          width: '600px',
          position: 'relative',
          display: 'block',
          align: 'center',
          margin: '0 auto',
        }}
      />
    );
  }
}

export default VenueMap;
