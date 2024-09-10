const properties = [
    {
        name: "Cabaña Acogedora en la Montaña",
        location: "Valle Nevado, Chile",
        price: "UF 13.000",
        description: "Una cabaña rústica con vistas impresionantes a las montañas, ideal para escapadas de invierno.",
        src: "./assets/img/valle-nevado.png",
        rooms: 3,
        bath: 1,
        smoke: false,
        pets: true
    },
    {
        name: "Moderna Casa en La Dehesa",
        location: "La Dehesa, Chile",
        price: "UF 21.000",
        description: "Moderna y espaciosa ubicada en el corazón de la ciudad, cerca de todos los servicios.",
        src: "./assets/img/cardImage2.png",
        rooms: 5,
        bath: 3,
        smoke: true,
        pets: false
    },
    {
        name: "Casa de Campo con Jardín",
        location: "Colchagua, Chile",
        price: "$250.000.000",
        description: "Hermosa casa de campo con amplio jardín, ideal para disfrutar de la tranquilidad y la naturaleza.",
        src: "./assets/img/cardImage3.png",
        rooms: 5,
        smoke: false,
        pets: true
    },
    {
        name: "Villa de Lujo en la Playa",
        location: "Reñaca, Chile",
        price: "$1.200.000.000",
        description: "Una villa exclusiva con piscina y acceso directo a la playa, perfecta para vacaciones familiares.",
        src: "./assets/img/renaca-playa.png",
        rooms: 6,
        bath: 1,
        smoke: true,
        pets: true
    },
    {
        name: "Apartamento Estudio en el Barrio Histórico",
        location: "Valparaíso, Chile",
        price: "$150.000.000",
        description: "Pequeño y acogedor apartamento en una zona llena de historia y cultura, con vistas al puerto.",
        src: "./assets/img/estudio-valpo.png",
        rooms: 1,
        bath: 1,
        smoke: false,
        pets: false
    },
    {
        name: "Mansión con Viñedos",
        location: "Casablanca, Chile",
        price: "UF 25.000",
        description: "Mansión de lujo rodeada de viñedos, perfecta para amantes del vino y la tranquilidad.",
        src: "./assets/img/mansion-casablanca.png",
        rooms: 8,
        bath: 6,
        smoke: true,
        pets: true
    }
];


const propertiesContainer = document.getElementById('properties-container');


// Función para renderizar todas las propiedades en el DOM
function renderProperties(properties) {
    properties.forEach(property => {
        // Maneja datos bool de propiedades
        const petsClass = property.pets ? 'pets-allowed' : 'pets-not-allowed';
        const petsText = property.pets ? 'Admiten mascotas' : 'No mascotas';
        
        const smokeClass = property.smoke ? 'smoke-allowed' : 'smoke-not-allowed';
        const smokeText = property.smoke ? 'Permitido fumar' : 'No permitido fumar';

        // Crea la estructura HTML 
        const propertyCard = `
            <div class="property-card">
                <div class="property-image">
                    <img src="${property.src}" alt="${property.name}">
                </div>
                <div class="property-details">
                    <h2>${property.name}</h2>
                    <p class="location"><i class="fa-solid fa-location-dot"></i> Location: ${property.location}</p>
                    <p class="price">${property.price}</p>
                    <p class="description">${property.description}</p>
                    <p class="rooms">
                        <span class="rooms-info">Habitaciones: ${property.rooms}</span>
                        <span class="bath-info">Baños: ${property.bath}</span>
                    </p>
                    <p class="rules">
                        <span class="smoke ${smokeClass}"><i class="fa-solid fa-smoking"></i> ${smokeText}</span>
                        <span class="pets ${petsClass}"><i class="fas fa-paw"></i>  ${petsText}</span>
                    </p>

                    <div class="card-buttons">
                        <a href="#" class="btn details-btn">Más info</a>
                        <a href="#" class="btn contact-btn">Contactar</a>
                    </div>
                </div>
            </div>
        `;
        // Insertar la tarjeta en el contenedor de propiedades
        propertiesContainer.innerHTML += propertyCard;
    });
}

// Llamar a la función para renderizar las propiedades
renderProperties(properties);
