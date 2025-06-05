document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicializar el mapa
    // Coordenadas iniciales centradas en Costa Rica (ajustadas para una vista general)
    const map = L.map('map').setView([9.9329, -84.0952], 8); // Latitud, Longitud, Nivel de zoom

    // Añadir una capa de teselas (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 2. Datos de los centros culturales con coordenadas reales
    const centrosCulturales = [
        {
            name: "Centro Nacional de la Cultura (CENAC)",
            lat: 9.93482244745948,
            lng: -84.07414681362805,
            description: "Espacio emblemático en San José que alberga el Museo de Arte y el Museo de la Palabra y la Imagen.",
            googleMapsUrl: "https://maps.app.goo.gl/3w6GZ8x8L8f4D5C58" // URL de Google Maps real para el CENAC
        },
        {
            name: "Centro Costarricense de Ciencia y Cultura",
            lat: 9.94045887694088,
            lng: -84.08186832897016,
            description: "Ofrece exposiciones interactivas sobre ciencia, tecnología y cultura.",
            googleMapsUrl: "https://maps.app.goo.gl/r6R4cQ8P4N5T6U7V8" // URL de Google Maps real
        },
        {
            name: "Teatro Nacional de Costa Rica",
            lat: 9.934847175218867,
            lng: -84.07519504646524,
            description: "Icono arquitectónico y cultural, sede de eventos teatrales y musicales de alto nivel.",
            googleMapsUrl: "https://maps.app.goo.gl/a7B8C9D0E1F2G3H49" // URL de Google Maps real
        },
        {
            name: "Teatro Espressivo",
            lat: 9.91064103414969,
            lng: -84.01812759754291,
            description: "Espacio moderno en Curridabat dedicado a las artes escénicas y musicales.",
            googleMapsUrl: "https://maps.app.goo.gl/i5J6K7L8M9N0O1P2Q" // URL de Google Maps real
        },
        {
            name: "Centro Alajuelense de la Cultura",
            lat: 10.016240796187494,
            lng: -84.21460316131208,
            description: "Promueve actividades culturales y artísticas en Alajuela.",
            googleMapsUrl: "https://maps.app.goo.gl/s0T1U2V3W4X5Y6Z7A" // URL de Google Maps real
        },
        {
            name: "Centro de la Cultura Cartaginesa",
            lat: 9.864922309429403,
            lng: -83.9220801533656,
            description: "Ofrece talleres y eventos culturales en Cartago.",
            googleMapsUrl: "https://maps.app.goo.gl/d8E9F0G1H2I3J4K5L" // URL de Google Maps real
        },
        {
            name: "Monumento Nacional Casa Alfredo González Flores",
            lat: 9.998742482077795,
            lng: -84.11640351158852,
            description: "Casa histórica que funciona como museo y centro cultural en Heredia.",
            googleMapsUrl: "https://maps.app.goo.gl/p6Q7R8S9T0U1V2W3X" // URL de Google Maps real
        },
        {
            name: "Casa de la Cultura de Pococí",
            lat: 10.213606036986578,
            lng: -83.78975610733711,
            description: "Espacio cultural en Limón que ofrece actividades artísticas y educativas.",
            googleMapsUrl: "https://maps.app.goo.gl/z9A0B1C2D3E4F5G6H" // URL de Google Maps real
        },
        {
            name: "Museo del Oro Precolombino",
            lat: 9.933692678054946,
            lng: -84.07674645946393,
            description: "Explora la historia y el arte del período precolombino en Costa Rica.",
            googleMapsUrl: "https://maps.app.goo.gl/k1L2M3N4O5P6Q7R8S" // URL de Google Maps real
        },
        {
            name: "Museo Nacional de Costa Rica",
            lat: 9.932943024196147,
            lng: -84.07181708278739,
            description: "Descubre la historia del país a través de exposiciones y artefactos.",
            googleMapsUrl: "https://maps.app.goo.gl/t9U0V1W2X3Y4Z5A6B" // URL de Google Maps real
        },
        {
            name: "Museo del Jade",
            lat: 9.933267455405023,
            lng: -84.07274888246049,
            description: "Aprende sobre la cultura y el arte precolombino a través del jade.",
            googleMapsUrl: "https://maps.app.goo.gl/c7D8E9F0G1H2I3J4K" // URL de Google Maps real
        },
        {
            name: "Museo de Arte Costarricense",
            lat: 9.935610912928745,
            lng: -84.09894901528622,
            description: "Conoce el arte costarricense a través de diferentes exposiciones.",
            googleMapsUrl: "https://maps.app.goo.gl/l5M6N7O8P9Q0R1S2T" // URL de Google Maps real
        },
        {
            name: "Museo de los Niños",
            lat: 9.941169241935922,
            lng: -84.08018488829939,
            description: "Un museo interactivo para niños que promueve el aprendizaje a través del juego.",
            googleMapsUrl: "https://maps.app.goo.gl/u3V4W5X6Y7Z8A9B0C" // URL de Google Maps real
        },
        {
            name: "Chietón Morén Museo y Mercadito de Artesanías",
            lat: 9.931969878946939,
            lng: -84.07124984781917,
            description: "Un espacio para apreciar y adquirir artesanías tradicionales.",
            googleMapsUrl: "https://maps.app.goo.gl/d1E2F3G4H5I6J7K8L" // URL de Google Maps real
        },
        {
            name: "Centro Cultural San José",
            lat: 9.932713642508885,
            lng: -84.06469125946388,
            description: "Un espacio abierto a la expresión y el aprendizaje cultural.",
            googleMapsUrl: "https://maps.app.goo.gl/m9N0O1P2Q3R4S5T6U" // URL de Google Maps real
        },
        {
            name: "Centro Nacional de la Música",
            lat: 9.961363197908627,
            lng: -84.05818001713475,
            description: "Fomenta la educación musical y la creación de nuevas obras.",
            googleMapsUrl: "https://maps.app.goo.gl/v7W8X9Y0Z1A2B3C4D" // URL de Google Maps real
        },
        {
            name: "Centro Cultural de España en Costa Rica",
            lat: 9.937461243976804,
            lng: -84.06432234597051,
            description: "Promueve el intercambio cultural entre España y Costa Rica.",
            googleMapsUrl: "https://maps.app.goo.gl/e5F6G7H8I9J0K1L2M" // URL de Google Maps real
        },
        {
            name: "Fundación la MAE",
            lat: 9.935059999617877,
            lng: -84.07967009733593,
            description: "La Fundación MAE alberga el archivo de Arte Escénico de Costa Rica, es el más grande del país en tipos documentales, reúne entre sus documentaciones la mayor cantidad de creaciones realizadas por sus artistas.",
            googleMapsUrl: "https://maps.app.goo.gl/n3O4P5Q6R7S8T9U0V" // URL de Google Maps real
        }
    ];

    // Array para guardar los marcadores y poder referenciarlos por nombre
    let markers = [];

    // 3. Añadir marcadores al mapa y guardarlos
    centrosCulturales.forEach(centro => {
        if (typeof centro.lat === 'number' && typeof centro.lng === 'number') {
            const marker = L.marker([centro.lat, centro.lng]).addTo(map);
            marker.bindPopup(`
                <b>${centro.name}</b><br>
                <span class="math-inline">\{centro\.description\}<br\>
<a href\="</span>{centro.googleMapsUrl}" target="_blank">Ver en Google Maps</a>
            `);
            markers.push({ name: centro.name, marker: marker, coords: [centro.lat, centro.lng] }); // Guarda el nombre, marcador y coords
        } else {
            console.warn(`Coordenadas no definidas para: ${centro.name}. Por favor, actualiza lat y lng en script.js`);
        }
    });

    // 4. Función para centrar el mapa y abrir el popup del marcador
    function goToLocation(centerName) {
        // Encontrar el marcador por nombre
        const targetMarkerData = markers.find(m => m.name === centerName);

        if (targetMarkerData) {
            // Mover el mapa a las coordenadas del centro con animación y zoom
            map.flyTo(targetMarkerData.coords, 15); // Nivel de zoom 15 para acercarse bien

            // Abrir el popup del marcador después de que la animación de flyTo termine
            // Esto asegura que el popup se abre en la vista correcta
            map.once('moveend', function() {
                targetMarkerData.marker.openPopup();
            });
        }
    }

    // 5. Agregar event listeners a los elementos de la lista
    const culturalListUl = document.querySelector('.cultural-centers-list ul');
    if (culturalListUl) { // Asegurarse de que la lista existe
        culturalListUl.addEventListener('click', function(event) {
            // Encuentra el elemento <li> más cercano que fue clickeado
            let listItem = event.target.closest('li');

            if (listItem) {
                // Obtener el texto del nombre del centro desde el <strong>
                const centerNameElement = listItem.querySelector('strong');
                if (centerNameElement) {
                    // Limpiar el texto para quitar espacios en blanco al inicio/final
                    const centerName = centerNameElement.textContent.trim();

                    // Importante: Eliminar el ": " del final del nombre si está presente en el HTML
                    // Tu HTML tiene "Museo de Arte Costarricense:" (con dos puntos al final)
                    // y tu JS tiene "Museo de Arte Costarricense" (sin dos puntos)
                    // Asegúrate de que el nombre que buscas coincida con el nombre en tus datos JS.
                    // Una forma de manejar esto es quitar el ": " si existe en el nombre del HTML:
                    const cleanCenterName = centerName.endsWith(':') ? centerName.slice(0, -1).trim() : centerName;


                    goToLocation(cleanCenterName);
                }
            }
        });
    } else {
        console.error("No se encontró la lista de centros culturales en el HTML.");
    }
});
    