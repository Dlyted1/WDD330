async function getJSON(url) {
    try {
      const response = await fetch(url)  
      if (!response.ok) {
          throw Error(response.statusText)
      } else {
          const fetchJson = await response.json();
          return fetchJson;
          //console.log(fetchJson);
      }
    } catch (error) {
        console.log(error);

    }
}
function getShips(url) {
    return getJSON(url);
}
function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";
    //loop through ships
    ships.forEach(function (ship) {
    // create elements for the list tr
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
      <td><a href="${ship.url}">${ship.name}</a></td>
      <td>${ship.length}</td>
      <td>${ship.crew}</td>
    `;
    listItem.addEventListener("click", function (event) {
        event.preventDefault();
        getShipDetails(ship.url);
    });

    //add list item to list
    list.appendChild(listItem);

    });
}

// write code to render details to HTML
function renderShipDetails(shipData) {
    console.log(shipData);
}

async function showShips(url = "https://swapi.dev/api/starships/") {
  const results = await getShips(url);

//get the list element
const shipListElement = document.getElementById("shiplist");
renderShipList(results.results, shipListElement);

// enable the next and prev buttons
if (results.next) {
    const next = document.getElementById("next");
    next.onclick = () => {
        // notice to show the next page we just re-call the showShips function with a new URL
        showShips(data.next);
      };
    }
if (results.previous) {
    const prv = document.getElementById("prv");
    prv.onclick = () => {
        showShips(data.previous);
    };
}
}
async function getShipDetails(url) {
    //call getJSON functions for the provided url
    const ship = await getShips(url);
    renderShipDetails(ship);
    //with the results populate the elements in the #detailsbox
  }
  showShips();
