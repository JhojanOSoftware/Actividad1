
// lee grid para extraer los lugares donde se colocara la foto 
const grid = document.getElementById("grid");

// Lee los datos de planetas desde el archivo local datos.json
fetch("./static/datos.json")
  .then(res => res.json())
  .then(data => {
    const planetas = data.items;
    planetas.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" onclick="location.href='detalle.html?id=${p.id}'">
        <h2>${p.name}</h2>
        <a href="detalle.html?id=${p.id}">Ver detalle</a>
      `;
      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Error:", err));
