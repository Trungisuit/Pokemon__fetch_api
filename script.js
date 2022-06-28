const poke_container = document.getElementById("poke-container");
const poke_count = 200;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);
const Fetch_Pokemon = async () => {
  for (let i = 1; i <= poke_count; i++) {
    await getPokemon(i);
  }
};
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  CreatePokemon(data);
};
const CreatePokemon = (pokemon) => {
  const pokemoncard = document.createElement("div");
  pokemoncard.classList.add("pokemon");
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];
  pokemoncard.style.backgroundColor = color;
  const PokemonInnerHTML = `
  <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
    </div>
  </div class="info">
  <span class="number"> 00${pokemon.id}</span> 
  <h3 class="name">${pokemon.name}</h3>
  <small class="type"> Type : <span> ${type}</span> </small>
</div>`;
  pokemoncard.innerHTML = PokemonInnerHTML;
  poke_container.appendChild(pokemoncard);
};

Fetch_Pokemon();
