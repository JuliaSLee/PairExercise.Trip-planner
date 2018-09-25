// console.log('Hello World form JavaScript');
const { newMarker } = require('./marker')
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoidHVuZ3N0ZW5vMjIiLCJhIjoiY2ptaTR5NThrMDA5ZjN3bzdydnNsbGh1ciJ9.M2njzKYljGO6wg6L3CAjLw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack Chicago coordinates; alternatively, use [-74.009, 40.705] for NY
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

let markerBase = new mapboxgl.Marker()
  .setLngLat([-87.641, 41.895])
  .addTo(map);

const markerOne = newMarker("activity", [-74.009151, 40.705086]);
markerOne.addTo(map);

const markerTwo = newMarker("hotel", [-73.048, 40.00000]);
markerTwo.addTo(map);

const markerThree = newMarker("restaurant", [-74.509151, 40.305086]);
markerThree.addTo(map);