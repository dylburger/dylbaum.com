import React from 'react';
import Link from 'gatsby-link';

import config from '../utils/config';
import PageTitle from '../components/PageTitle';

const generateAirportDescription = arrayOfAirports => (
  <div>
    <p>
      There are {arrayOfAirports.length} airports within a 2 hour drive of the
      venue:
    </p>
    <ul
      style={{
        listStyle: 'none',
        fontWeight: 'bold',
      }}>
      {generateListOfAirports(arrayOfAirports)}
    </ul>
    <p>We recommend renting a car to travel to the area.</p>
  </div>
);

const generateListOfAirports = arrayOfAirports =>
  arrayOfAirports.map(airport => (
    <li key={airport.code}>
      {airport.name} ({airport.code}) : {airport.distance}
    </li>
  ));

const generateListOfHotels = arrayOfHotels =>
  arrayOfHotels.map(hotel => (
    <li key={hotel.title}>
      <a href={hotel.link}>{hotel.title}</a>
    </li>
  ));

const TravelAccommodations = () => (
  <div>
    <PageTitle title="Travel & Accommodations" />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      Travel
    </h4>
    {generateAirportDescription(config.travel.airports)}
    <br />
    <br />
    <h4
      style={{
        textDecoration: 'underline',
      }}>
      Accommodations
    </h4>
    <p>{config.hotel.blockDescription}</p>
    <p>
      There are a number of other hotels within 10 minutes of the venue,
      including:
    </p>
    <ul
      style={{
        listStyle: 'none',
        fontWeight: 'bold',
      }}>
      {generateListOfHotels(config.hotel.listOfHotelsInArea)}
    </ul>
    <p>
      If you&rsquo;re planning to stay in the area before or after the wedding,{' '}
      <a href={config.surroundingArea.airbnbLink}>Airbnb</a> is a great option.
    </p>
  </div>
);

export default TravelAccommodations;
