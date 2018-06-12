import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const generateActivitiesDescription = arrayOfActivities => (
  <div>
    {config.surroundingArea.introText}
    <ul
      style={{
        listStyle: 'none',
      }}>
      {generateListOfActivities(arrayOfActivities)}
    </ul>
  </div>
);

const generateListOfActivities = arrayOfActivities =>
  arrayOfActivities.map((activity, i) => (
    <li key={`activity-${i}`}>{activity.text}</li>
  ));

export default () => (
  <div>
    <PageTitle title="Things to See" />
    {generateActivitiesDescription(config.surroundingArea.thingsToSee)}
  </div>
);
