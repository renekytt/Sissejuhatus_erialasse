
var mymap = L.map('mapid').setView([58.378025, 26.728493], 13);
var marker = L.marker([58.379000, 26.728320]).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Eesti IT erakond',
	id: 'mapbox.streets'
}).addTo(mymap);
