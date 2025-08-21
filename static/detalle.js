// detalle.js
// Datos de planetas directamente en JS para evitar problemas de fetch
const planetas = [
  {
    id: 1,
    name: "Namek",
    description: "Planeta natal de los Namekianos. Escenario de importantes batallas y la obtención de las Dragon Balls de Namek.",
    image: "https://dragonball-api.com/planetas/Namek_U7.webp"
  },
  {
    id: 2,
    name: "Tierra",
    description: "La Tierra también llamado Mundo del Dragón (Dragon World), es el planeta principal donde se desarrolla la serie de Dragon Ball. Se encuentra en el Sistema Solar de la Vía Láctea de las Galaxias del Norte del Universo 7, lugar que supervisa el Kaio del Norte, y tiene su equivalente en el Universo 6. El hogar de los terrícolas y los Guerreros Z. Ha sido atacado en varias ocasiones por enemigos poderosos.",
    image: "https://dragonball-api.com/planetas/Tierra_Dragon_Ball_Z.webp"
  },
  {
    id: 3,
    name: "Vegeta",
    description: "El planeta Vegeta, conocido como planeta Plant antes del fin de la Guerra Saiyan-tsufruiana en el año 730, es un planeta rocoso ficticio de la serie de manga y anime Dragon Ball y localizado en la Vía Láctea de las Galaxias del Norte del Universo 7 hasta su destrucción a manos de Freezer en los años 737-739. Planeta natal de los Saiyans, destruido por Freezer. Anteriormente conocido como Planeta Plant.",
    image: "https://dragonball-api.com/planetas/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp"
  },
  {
    id: 4,
    name: "Freezer No. 79",
    description: "Planeta artificial utilizado por Freezer como base de operaciones y centro de clonación.",
    image: "https://dragonball-api.com/planetas/PlanetaFreezer.webp"
  },
  {
    id: 5,
    name: "Kanassa",
    description: "Planeta habitado por los Kanassans y conocido por la lucha entre Bardock y los habitantes del planeta.",
    image: "https://dragonball-api.com/planetas/800px-PlanetKannasa.webp"
  },
  {
    id: 6,
    name: "Monmar",
    description: "Planeta donde Gohan y Krillin encontraron las Dragon Balls para revivir a sus amigos durante la Saga de Namek.",
    image: "https://dragonball-api.com/planetas/monmar.webp"
  },
  {
    id: 7,
    name: "Yardrat",
    description: "Planeta de la técnica Instant Transmission, aprendida por Goku durante su estancia.",
    image: "https://dragonball-api.com/planetas/PlanetYardrat.webp"
  },
  {
    id: 11,
    name: "Kaiō del Norte",
    description: "El Planeta Kaio se encuentra al final del largo Camino de la Serpiente. Es donde viven el Kaio del Norte, su mascota Bubbles, al que utiliza como parte de su entrenamiento, y Gregory.",
    image: "https://dragonball-api.com/planetas/Planeta_del_Kaio_del_Norte.webp"
  },
  {
    id: 13,
    name: "Makyo",
    description: "Makyo es un planeta y la fuente de alimentación de todos los malévolos, especialmente Garlic Jr., que solo aparece durante el Arco de Garlic Jr. de Dragon Ball Z.",
    image: "https://dragonball-api.com/planetas/Makyo_Star.webp"
  },
  {
    id: 14,
    name: "Babari",
    description: "Planeta habitado por los Babari, es un planeta telúrico del Universo 10 donde residen los babarianos, hizo su primera aparición en el episodio 54 de Dragon Ball Super. Es donde Tarble, el hermano de Vegeta, se refugió.",
    image: "https://dragonball-api.com/planetas/Planeta_Babari.webp"
  }
];

// Lee el id del planeta desde la URL
const params = new URLSearchParams(window.location.search);
const planetId = params.get('id');

const container = document.getElementById("planet-detail");
const planeta = planetas.find(p => String(p.id) === planetId);
if (planeta) {
  container.innerHTML = `
    <h2>${planeta.name}</h2>
    <img src="${planeta.image}" alt="${planeta.name}" style="max-width:300px;display:block;margin-bottom:1em;">
    <p>${planeta.description}</p>
  `;
} else {
  container.textContent = "No se encontró información para este planeta.";
}
