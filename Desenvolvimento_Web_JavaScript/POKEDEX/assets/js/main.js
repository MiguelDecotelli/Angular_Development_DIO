const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('LoadMoreButton')
const maxRecords = 151;
const limit = 10;
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
            <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            <a href="#" class="more-info type" id="abilities" data-number="${pokemon.number}">abilities</a>
            </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
    ).join('')
    pokemonList.innerHTML += newHtml

      // Adição de um 'event listener' para o link criado (more-info) dentro da função acima
      const moreInfoLinks = document.querySelectorAll('.more-info');
      moreInfoLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const number = link.dataset.number;
          openNewPageWithInfo(number);
        });
      });  
    });
}

// Função responsável por carregar uma nova página referente ao pokemon (número) selecionado.
function openNewPageWithInfo(number) {
    const searchParams = new URLSearchParams();
    searchParams.set('number', number);
  
    const newUrl = 'http://127.0.0.1:5501/pokemon_abilities.html?' + searchParams.toString();
    window.location.href= newUrl;
  }

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadPokemonItens(offset, limit)
    }

})
