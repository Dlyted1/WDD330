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

// can use fetch and catch here (instead of async)
function getDetails(id, url) {
    fetch(url) 
        .then ( res => res.json() )  // returns promise
        .then( json => {            //returns another promise - this is data we want to do something with
            console.log('DETAILS ', json)
            var li = document.getElementById(id);  //grab list innerHTML
            var div = document.createElement('div'); //put image inside here
            div.innerHTML =  //image
            `
                <img src="${json.sprites.front_default}" />
            
            `
            li.lastElementChild.remove();  //remove button as not needed
            li.appendChild(div);   //append data with the image
        })  

}