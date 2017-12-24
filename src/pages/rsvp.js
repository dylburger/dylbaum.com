import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const RSVP = () => (
  <div>
    <PageTitle title="RSVP" />
    {config.rsvp.formHTML}
  </div>
);

export default RSVP;
