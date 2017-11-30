import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import config from '../utils/config';
import fixLeafletIcons from '../utils/map/fixLeafletIcons';
import addTileLayerToMap from '../utils/map/addTileLayerToMap';

const generateVenueMap = () => {
  fixLeafletIcons();
  const venueMap = L.map('venuemap').setView(
    [config.venue.latitude, config.venue.longitude],
    config.venue.mapZoomLevel,
  );

  addTileLayerToMap(venueMap);

  const venueMarker = L.marker([config.venue.latitude, config.venue.longitude])
    .addTo(venueMap)
    .bindPopup(config.venue.title)
    .openPopup();
};

export default generateVenueMap;
