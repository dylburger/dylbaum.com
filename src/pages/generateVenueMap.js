import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import config from '../utils/config';

const generateVenueMap = () => {
  // Magic to get Leaflet icons working
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

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

  const venueMarker = L.marker([config.venue.latitude, config.venue.longitude])
    .addTo(venueMap)
    .bindPopup(config.venue.title)
    .openPopup();
};

export default generateVenueMap;
