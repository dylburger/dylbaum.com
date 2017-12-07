import React from 'react';
import Link from 'gatsby-link';

import generateAirportMap from './generateAirportMap';

class AirportMap extends React.Component {
  componentDidMount() {
    generateAirportMap();
  }

  render() {
    return (
      <div
        id="airportmap"
        style={{
          height: '400px',
          width: '60vw',
          position: 'relative',
          display: 'block',
          align: 'center',
          margin: '0 auto',
        }}
      />
    );
  }
}

export default AirportMap;
