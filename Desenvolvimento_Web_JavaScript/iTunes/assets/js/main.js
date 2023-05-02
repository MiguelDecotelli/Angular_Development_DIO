const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('LoadMoreButton')
const maxRecords = 151;
const artist = 'weezer';
let songs = 20;


function loadItunesSongs(songs, limit) {
    songsFromItunes.getItunes(songs, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((song) => `
        <li class="song ${song.trackname}">
            <span class="number">#${song.number}</span>
            <span class="name">${song.name}</span>
            <div class="detail">
            <ol class="types">
            ${song.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            <span class="type" id="abilities${song.type}">${song.type}</span>
                </ol>
                <img src="${song.photo}" alt="${song.name}">
            </div>
        </li>
    `
    ).join('')
    pokemonList.innerHTML += newHtml
})
}

loadItunesSongs(songs, limit)

loadMoreButton.addEventListener('click', () => {
    songs += limit

    const qtdRecordNextPage = songs + limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - songs
        loadItunesSongs(songs, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadItunesSongs(songs, limit)
    }

})