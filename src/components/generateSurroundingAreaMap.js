import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import addTileLayerToMap from '../utils/map/addTileLayerToMap';
import config from '../utils/config';
import fixLeafletIcons from '../utils/map/fixLeafletIcons';

const generateSurroundingAreaMap = () => {
  fixLeafletIcons();
  const surroundingAreaMap = L.map('surrounding-area-map').setView(
    [config.surroundingArea.map.latitude, config.surroundingArea.map.longitude],
    config.surroundingArea.map.zoomLevel,
  );

  addTileLayerToMap(surroundingAreaMap);
};

export default generateSurroundingAreaMap;
