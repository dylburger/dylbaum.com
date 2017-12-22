import React from 'react';
import zola from '../../public/static/zola.png';
import cratebarrel from '../../public/static/cratebarrel.png';
import macys from '../../public/static/macys.png';
import bridePic from '../../public/static/bridePic.png';
import groomPic from '../../public/static/groomPic.png';

const brideName = "Sally";
const groomName = "Tom";

const config = {
  site: {
    backgroundColor: '#f8f8f8',
    navColor: '#D95E39',
    textColor: '#001f3f',
    title: `${brideName} and ${groomName} Wedding Site`,
    description: `${brideName} and ${groomName} wedding website`,
    keywords: `${brideName}, ${groomName}, wedding website`,
  },
  img: {
    bridePic,
    groomPic,
  },
  wedding: {
    date: '1/2/2017',
    location: 'Washington D.C.',
    startTime: '4:00',
    endTime: '10:00pm',
    arrivalTime: '3:45pm',
  },
  welcomeParty: {
    date: '1/1/2017',
    startTime: '8:00',
    endTime: '11:00pm',
    location: 'Location TBD',
  },
  afterParty: {
    startTime: '10:00pm',
    endTime: 'Midnight',
    location: 'Location TBD',
  },
  brunch: {
    date: '1/3/2017',
    startTime: '10:00am',
    endTime: 'Noon',
    location: 'Location TBD',
  },
  personalInfo: {
    bride: brideName,
    groom: groomName,
    description: (
      <div>
        <p>We are very excited to have you at our wedding!</p>
        <p>
          Please check back here soon for information on hotels, activities, and
          other details.
        </p>
      </div>
    ),
  },
  travel: {
    mapZoomLevel: 7,
    airports: [
      {
        name: 'Oakland',
        code: 'OAK',
        distance: '1 hour, 30 min',
        latitude: 37.7126,
        longitude: -122.2197,
      },
      {
        name: 'San Francisco',
        code: 'SFO',
        distance: '1 hour, 30 min',
        latitude: 37.6213,
        longitude: -122.379,
    ],
  },
  navBarLinks: [
    {
      link: '/about',
      title: 'ABOUT US',
    },
    {
      link: '/schedule',
      title: 'SCHEDULE',
    },
    {
      link: '/travelaccommodations',
      title: 'TRAVEL & ACCOMMODATIONS',
    },
    {
      link: '/venue',
      title: 'VENUE',
    },
    {
      link: '/registry',
      title: 'REGISTRY',
    },
    {
      link: '/rsvp',
      title: 'RSVP',
    },
  ],
  venue: {
    latitude: 38.897676,
    longitude: -77.036530,
    title: 'The White House',
    mapZoomLevel: 8,
    webAddr: 'https://www.whitehouse.gov/',
    googleMapsLink:
      'https://www.google.com/maps/place/The+White+House,+1600+Pennsylvania+Ave+NW,+Washington,+DC+20500/@38.8976094,-77.0389236,17z/data=!3m2!4b1!5s0x89b7b7bce16040c9:0xb825fcec8d0b4d30!4m5!3m4!1s0x89b7b7bce1485b19:0x9fc7bf09fd5d9daf!8m2!3d38.8976633!4d-77.0365739',
    drivingNotes:
      'Lyft and Uber is available in the area.',
  },
  hotel: {
    latitude: 38.897676,
    longitude: -77.036530,
    title: 'Oxford Suites',
    blockDescription: 'Hotel block information coming soon.',
    listOfHotelsInArea: [
      'This is a fake hotel',
      'Another fake hotel',
    ],
  },
  surroundingArea: {
    name: 'Washington D.C.',
    airbnbLink: 'https://www.airbnb.com/s/Washington--DC--United-States/all',
    map: {
      latitude: 38.897676,
      longitude: -77.036530,
      zoomLevel: 9,
    },
  },
  registries: [
    {
      name: 'zola',
      link: 'https://www.zola.com/',
      img: zola,
    },
    {
      name: 'cratebarrel',
      link:
        'https://www.crateandbarrel.com/',
      img: cratebarrel,
    },
    {
      name: 'macys',
      link: 'https://www.macys.com/',
      img: macys,
    },
  ],
  rsvp: {
    formHTML: (
      <iframe
        src="Insert link to form here"
        width="750"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0">
        Loading...
      </iframe>
    ),
  },
  mapbox: {
    accessToken:
      'insert mapbox token here',
  },
};

export default config;
