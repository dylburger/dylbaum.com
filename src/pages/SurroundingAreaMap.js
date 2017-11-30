import React from 'react';
import Link from 'gatsby-link';

import generateSurroundingAreaMap from './generateSurroundingAreaMap';

class SurroundingAreaMap extends React.Component {
  componentDidMount() {
    generateSurroundingAreaMap();
  }

  render() {
    return (
      <div
        id="surrounding-area-map"
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

export default SurroundingAreaMap;
