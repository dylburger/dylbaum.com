import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const generateVenueMap = () => {
  const latitude = 38.3485222;
  const longitude = -122.7650026;
  const zoomLevel = 13;
  const venueMap = L.map('venuemap').setView([latitude, longitude], 12);
  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken:
        'pk.eyJ1IjoiZHlsYnVyZ2VyIiwiYSI6ImNqYWg5OHlmejFuN2oycXJ6dmw4ZTVzMmMifQ.v3od_kcVEJoFeslKJRrd2w',
    },
  ).addTo(venueMap);
};

export default generateVenueMap;
