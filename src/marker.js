const mapboxgl = require('mapbox-gl');

const newMarker = (type, location) => {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  switch (type) {
    case 'hotel':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
      break;

    case 'restaurant':
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';

      break;

    default:
      markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  }
  return new mapboxgl.Marker(markerDomEl).setLngLat(location);
};

module.exports = { newMarker };
