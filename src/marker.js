const mapboxgl = require('mapbox-gl')

const newMarker = (type, location) => {
    switch(type){
        case 'hotel':
        console.log("This is Hotel")
        const markerDomElHotel = document.createElement("div"); 
        markerDomElHotel.style.width = "32px";
        markerDomElHotel.style.height = "39px";
        markerDomElHotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
        
        return new mapboxgl.Marker(markerDomElHotel).setLngLat(location); 
        // break;

        case 'restaurant':
        const markerDomElRest = document.createElement("div");
        markerDomElRest.style.width = "32px";
        markerDomElRest.style.height = "39px";
        markerDomElRest.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
        
        return new mapboxgl.Marker(markerDomElRest).setLngLat(location); 
        // break;

        default:
        const markerDomElActivity = document.createElement("div"); 
        markerDomElActivity.style.width = "32px";
        markerDomElActivity.style.height = "39px";
        markerDomElActivity.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

        return new mapboxgl.Marker(markerDomElActivity).setLngLat(location); 
    }
}

module.exports = {newMarker}