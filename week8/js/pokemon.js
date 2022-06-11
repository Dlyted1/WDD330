//grab the api - use try sync in case of anny errors, 
async function getPokemon(url) {
    try {
        const response = await fetch(url);  // async fetch will return a promise until it's resolved
        if (!response.ok) {      //if response not ok 
             throw Error(response.statusText)
     }  else {    //if it is ok grab Json
             const fetchJson = await response.json();
             //console.log(fetchJson)
             renderPokemon(fetchJson) //define as function below
     }

    } catch (error) {
        console.log(error);
    }
} 

function renderPokemon(data) {
    const pokemonContainer = document.querySelector('#pokemonList'); //to enter in the DOM

    data.results.forEach( pokemon => {  //.results here grabed from console data array, this is what we want to show
         const listItem = document.createElement('li');  //creating list element
         // listItem.textContent = pokemon.name;
         listItem.innerHTML = 
         `
            <span class="poke-name">${pokemon.name}</span> <button class="view-btn" onclick="getDetails('${pokemon.name}'), ('${pokemon.url}')">View</button>
         `
         listItem.id = pokemon.name;
         pokemonContainer.appendChild(listItem);
    
        })    
}
