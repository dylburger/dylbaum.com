import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import config from '../utils/config';

const generateVenueMap = () => {
  const venueMap = L.map('venuemap').setView(
    [config.venue.latitude, config.venue.longitude],
    config.venue.mapZoomLevel,
  );
  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: config.mapbox.accessToken,
    },
  ).addTo(venueMap);
};

export default generateVenueMap;
