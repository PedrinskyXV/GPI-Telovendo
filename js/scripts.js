//Proveedor de tileLayer
var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 17,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
});

//Creación del mapa con el proveedor.
var miMapa= L.map('map', {
    layers: [base],
    zoom: 16,
    fullscreenControl: true,
    fullscreenControlOptions: {
        title:"Expandir Mapa",
        titleCancel:"Salir"
    }
});

//Funcion para centrar en el marcador
function centerLeafletMapOnMarker(map, marker) {
	var latLngs = [ marker.getLatLng() ];
	var markerBounds = L.latLngBounds(latLngs);
	map.fitBounds(markerBounds);
}

// Añadir control de escala
var escala = L.control.scale({ position: 'bottomleft', metrical: false, maxWidth: 200});
miMapa.addControl(escala);

//Marcador Personalizado
var blackIcon = new L.Icon({
	iconUrl: 'assets/img/map/marker-icon-2x-black.png',
	shadowUrl: 'assets/img/map/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//Establecer marcador con doble clic
miMapa.doubleClickZoom.disable();

/* miMapa.on('dblclick', e => {
    let latLng = miMapa.mouseEventToLatLng(e.originalEvent);
    L.marker([latLng.lat, latLng.lng]).addTo(miMapa)
}); */

/* navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos;
		var gps = L.marker([coords.latitude, coords.longitude], {icon: blackIcon}).addTo(miMapa);
		centerLeafletMapOnMarker(miMapa, gps);
        gps.bindPopup("<center><b>MI UBICACIÓN</b><br>Ubicación Obtenida</>").openPopup();
    },
    (err) => {
        console.log(error);
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
		maximumAge: 0
    }
) */

//Establecer marcador
let marker = L.marker([13.6739956, -89.2788313]).addTo(miMapa);

marker.bindPopup("<center><b>TeLoVendo</b><br>Donde encuentras lo que necesitas para tu hogar</>");
var centrar = miMapa;

centerLeafletMapOnMarker(centrar, marker);
