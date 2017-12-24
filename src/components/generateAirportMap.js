import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import addTileLayerToMap from '../utils/map/addTileLayerToMap';
import config from '../utils/config';
import fixLeafletIcons from '../utils/map/fixLeafletIcons';

const generateMarker = (map, locationData) => {
  L.marker([locationData.latitude, locationData.longitude])
    .addTo(map)
    .bindPopup(`${locationData.name} (${locationData.code})`);
};

const generateAirportMap = () => {
  fixLeafletIcons();
  const airportMap = L.map('airportmap').setView(
    [config.venue.latitude, config.venue.longitude],
    config.travel.mapZoomLevel,
  );

  addTileLayerToMap(airportMap);

  // Generate marker for our venue, as a point of reference
  const venueMarker = L.marker([config.venue.latitude, config.venue.longitude])
    .addTo(airportMap)
    .bindPopup(config.venue.title)
    .openPopup();

  // Generate markers for each airport in our config
  config.travel.airports.forEach(airport => {
    generateMarker(airportMap, airport);
  });
};

export default generateAirportMap;
