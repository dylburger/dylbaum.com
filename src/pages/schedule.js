import React from 'react';
import Link from 'gatsby-link';
import config from '../utils/config';
import PageTitle from './PageTitle';

const Schedule = () => (
  <div>
    <PageTitle title="Schedule" />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      {config.rehearsalDinner.date}
    </h4>
    <p>
      <strong>
        {config.rehearsalDinner.startTime} - {config.rehearsalDinner.endTime}
      </strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        Rehearsal Dinner
      </span>
      <br />
      {config.rehearsalDinner.location}
    </p>
    <p>
      <strong>
        {config.postRehearsalParty.startTime +
          ' - ' +
          config.postRehearsalParty.endTime}
      </strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        Post-Rehearsal Dinner Party
      </span>
      <br />
      {config.postRehearsalParty.location}
    </p>
    <br />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      {config.wedding.date}
    </h4>
    <p>
      <strong>
        {config.wedding.startTime + ' - ' + config.wedding.endTime}
      </strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        Wedding
      </span>
      <br />
      {config.venue.title}
      <br />
      (Please arrive no later than {config.wedding.arrivalTime})
    </p>
    <p>
      <strong>
        {config.afterParty.startTime + ' - ' + config.afterParty.endTime}
      </strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        After Party
      </span>
      <br />
      {config.afterParty.location}
    </p>
    <br />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      {config.brunch.date}
    </h4>
    <p>
      <strong>{config.brunch.startTime + ' - ' + config.brunch.endTime}</strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        Brunch
      </span>
      <br />
      {config.brunch.location}
    </p>
  </div>
);

export default Schedule;
