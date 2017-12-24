import React from 'react';
import Link from 'gatsby-link';
import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const Schedule = () => (
  <div>
    <PageTitle title="Schedule" />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      {config.welcomeParty.date}
    </h4>
    <p>
      <strong>
        {config.welcomeParty.startTime + ' - ' + config.welcomeParty.endTime}
      </strong>
      <br />
      <span
        style={{
          fontStyle: 'italic',
        }}>
        Welcome Party
      </span>
      <br />
      {config.welcomeParty.location}
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
