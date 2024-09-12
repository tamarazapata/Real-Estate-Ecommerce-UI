const properties4sale = [
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

const properties4rent = [
    {
        name: "Departamento Moderno en Providencia",
        location: "Providencia, Santiago, Chile",
        price: "$750.000",
        description: "Un departamento moderno con vista a la ciudad, ubicado cerca de centros comerciales y transporte público.",
        src: "./assets/img/providencia.jpg",
        rooms: 2,
        bath: 2,
        smoke: false,
        pets: false
    },
    {
        name: "Casa Familiar con Jardín en La Reina",
        location: "La Reina, Santiago, Chile",
        price: "$1.200.000",
        description: "Amplia casa familiar con gran jardín, ideal para familias que buscan tranquilidad en un barrio residencial.",
        src: "./assets/img/la-reina.png",
        rooms: 4,
        bath: 3,
        smoke: false,
        pets: true
    },
    {
        name: "Loft Estilo Industrial en Barrio Italia",
        location: "Barrio Italia, Santiago, Chile",
        price: "$650.000",
        description: "Loft con un diseño industrial, perfecto para jóvenes profesionales, a pasos de cafés y tiendas de diseño.",
        src: "./assets/img/barrio-italia.png",
        rooms: 1,
        bath: 1,
        smoke: false,
        pets: true
    },
    {
        name: "Penthouse de Lujo en Las Condes",
        location: "Las Condes, Santiago, Chile",
        price: "UF 35",
        description: "Penthouse de lujo con terraza privada y vistas panorámicas a la cordillera de Los Andes, ideal para ejecutivos.",
        src: "./assets/img/las-condes.png",
        rooms: 5,
        bath: 4,
        smoke: false,
        pets: false
    },
    {
        name: "Estudio Céntrico en Santiago Centro",
        location: "Santiago Centro, Chile",
        price: "$350.000",
        description: "Estudio céntrico, perfecto para quienes buscan vivir cerca del corazón de la ciudad con todas las comodidades.",
        src: "./assets/img/santiago-centro.png",
        rooms: 1,
        bath: 1,
        smoke: true,
        pets: false
    },
    {
        name: "Casa Rústica en Pirque",
        location: "Pirque, Santiago, Chile",
        price: "$850.000",
        description: "Casa rústica con amplios terrenos y zonas verdes, ideal para desconectarse de la ciudad.",
        src: "./assets/img/pirque.png",
        rooms: 3,
        bath: 2,
        smoke: true,
        pets: true
    }
];


const propertiesContainer = document.getElementById('properties-container');

const propertiesContainerRent = document.getElementById('properties-container-rent');




// Función para renderizar todas las propiedades en el DOM
function renderProperties(properties, propertiesContainer) {
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

if(window.location.pathname.includes('index.html')){
    renderProperties(properties4sale.slice(0,3), propertiesContainer)
    renderProperties(properties4rent.slice(0,3), propertiesContainerRent)
}
if(window.location.pathname.includes('propiedades_alquiler.html')){
    renderProperties(properties4rent, propertiesContainerRent)
}
if(window.location.pathname.includes('propiedades_venta.html')){
    renderProperties(properties4sale, propertiesContainer)
}


