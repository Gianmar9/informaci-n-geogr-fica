// Inicializa el mapa
var map = L.map('map').setView([0, 0], 2);

// Añade una capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Carga la capa GeoJSON
fetch('data/priemeracapa.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    })
    .catch(error => console.error('Error al cargar el GeoJSON:', error));
