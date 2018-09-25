console.log('Hello World form JavaScript');

const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoidHVuZ3N0ZW5vMjIiLCJhIjoiY2ptaTR5NThrMDA5ZjN3bzdydnNsbGh1ciJ9.M2njzKYljGO6wg6L3CAjLw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack Chicago coordinates; alternatively, use [-74.009, 40.705] for NY
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
