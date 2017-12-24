import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const generateRegistryLinks = () =>
  config.registries.map(registry => {
    return (
      <div key={registry.name}>
        <a key={registry.name} href={registry.link}>
          <img src={registry.img} alt={registry.name} />
        </a>
        <br />
        <br />
      </div>
    );
  });

const Registry = () => (
  <div>
    <PageTitle title="Registry" />
    <p>Please click on the logos below to visit our registries</p>
    {generateRegistryLinks()}
  </div>
);

export default Registry;
