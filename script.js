const jogadores = [
  { nome: "Jayson Tatum", time: "Boston Celtics", votos: 7 },
  { nome: "Shai Gilgeous-Alexander", time: "Oklahoma City Thunder", votos: 4 },
  { nome: "Victor Wembanyama", time: "San Antonio Spurs", votos: 10 },
  { nome: "Giannis Antetokounmpo", time: "Milwaukee Bucks", votos: 3 },
];

const lista = document.getElementById("lista");

function render() {
  lista.innerHTML = "";

  jogadores.forEach((j, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <h2>${j.nome}</h2>
        <p>${j.time}</p>
      </div>
      <span class="votos">${j.votos}</span>
      <button type="button">Votar</button>
    `;
    li.querySelector("button").addEventListener("click", () => {
      jogadores[i].votos++;
      render();
    });
    lista.appendChild(li);
  });
}

render();