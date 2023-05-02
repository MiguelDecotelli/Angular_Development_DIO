// Recebe o número da URL como parâmetro
const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get('number');

// Função para "pegar" os detalhes dos Pokemons
function fetchPokemonDetails(number) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(response => response.json());
}

// Função para carregar tods os detalhes selecionados de cada pokemon, na tela.
function renderPokemonDetails(pokemon) {
    const pokemonDetails = document.getElementById('pokemonDetails');
    pokemonDetails.innerHTML = `
      <div class="pokemon_details">
        <span class="${pokemon.types[0].type.name}">
          <li class="name ${pokemon.types[0].type.name}">${pokemon.name}</li>
          <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
          <h3>About:</h3>
          <ul>
          <li>Base Experience:<ol id="about_details">${pokemon.base_experience}xp</ol></li>
          <li>Height:<ol id="about_details">${(pokemon.height / 10).toFixed(2)} cm</ol></li>
          <li>Weight:<ol id="about_details">${(pokemon.weight / 10)}kg</ol></li>            
          <li>Stats:${pokemon.stats.map(stat => `<ol id="about_details">${stat.stat.name}: ${stat.base_stat} points</ol></li>`).join('')}
          <li>Abilities:${pokemon.abilities.map(ability => `<ol id="about_details">${ability.ability.name}</ol></li>`).join('')}
          <li>Special moves:${pokemon.moves.slice(0, 5).map(move => `<ol id="about_details">${move.move.name}</ol></li>`).join('')}
          </ul>
        </span>
      </div>                         
    `;
}

// Função para carregar os detalhes dos Pokemons.
function loadPokemonDetails(number) {
    fetchPokemonDetails(number)
        .then(pokemon => {
            renderPokemonDetails(pokemon);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}


// Carrega os detalhes dos Pokemons quando a página é carregada.
window.addEventListener('load', () => {
    loadPokemonDetails(number);
});


const returnPageButton = document.getElementById('return_page');

returnPageButton.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5501/index.html';
});
