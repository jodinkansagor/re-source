MQ.geocode({
    map: map,
    icon: L.icon({
        iconUrl: '../assests/toilet.png',
        iconSize: [ 22, 28 ],
        iconAnchor: [ 11, 28 ],
        popupAnchor: [ 0, -22 ]
    })

// L.mapquest.key = 'KEY';

// // 'map' refers to a <div> element with the ID map
// L.mapquest.map('map', {
//     center: [37.7749, -122.4194],
//     layers: L.mapquest.tileLayer('map'),
//     zoom: 12
// });