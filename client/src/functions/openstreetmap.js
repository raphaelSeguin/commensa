

function makeURL(left, bottom, right, top) {
    return `https://api.openstreetmap.org/api/0.6/map?bbox=${left},${bottom},${right},${top}`;
}

console.log(makeURL(2.3499, 48.9373, 2.4499, 49.19373));

function exampleParser(xmlString, elm) {
    let parser = new DOMParser();
    const parsed = parser.parseFromString(xmlString, "text/xml");
    return parsed.getElementsByTagName(elm)[0].textContent;
}

/*
GET /api/0.6/map?bbox=left,bottom,right,top
where:

left is the longitude of the left (westernmost) side of the bounding box.
bottom is the latitude of the bottom (southernmost) side of the bounding box.
right is the longitude of the right (easternmost) side of the bounding box.
top is the latitude of the top (northernmost) side of the bounding box.

The maximum bbox size is 0.25, and your request was too large. Either request a smaller area, or use planet.osm
The latitudes must be between -90 and 90, longitudes between -180 and 180 and the minima must be less than the maxima.
*/