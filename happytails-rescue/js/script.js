import {isValidZip, showAlert } from "./validate";

// import requests
// client_id = ""
// client_pass = ""
// data = {"grant_type":"client_credentials"}
// api_url = "https://api.petfinder.com/v2/oauth2/token"
// r = requests.post(api_url,data=data,auth=(client_id,client_pass))
// r = r.json()


const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

//fetch animals from API
function fetchAnimals(e) {
    e.preventDefault();

    //get user input
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;

    //validate Zip
    if (!isValidZip(zip)) {
    showAlert("Please use a valid zipcode", "danger");
    return;
    }

    //fetch animals or pets through api
    let key = process.env.PETFINDER_API_KEY;
    let secret = process.env.PETFINDER_API_SECRET_KEY;
    let token; 
    // get auth token
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        body:
        "grant_type=client_credentials&client_id=" +
        key +
        "&client_secret=" +
        secret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        token = data.access_token;
      })
      .then(() => {
        // use token to fetch animals
        fetch(
          `https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}`,
          {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => showAnimals(data.animals));
      })
      .catch((err) => console.error(err));
  }
  
  // show listings of pets
  function showAnimals(pets) {
    const results = document.querySelector("#results");
  
    // clear results first
    results.innerHTML = "";
  
    // loop through pets
    pets.forEach((pet) => {
      /* console.log(pet); */
      // create elements
      const div = document.createElement("div");
      div.classList.add("card", "card-body", "mb-3");
      div.innerHTML = `
        <div class="row">
          <div class="col-sm-6">
            <h4>${pet.name} (${pet.age})</h4>
            <p class="text-secondary">${pet.breeds.primary}</p>
            <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
        pet.contact.address.postcode
      }</p>
            <ul class="list-group">
              <li class="list-group-item">${
                pet.contact.phone
                  ? `<li class="list-group-item">Phone: ${pet.contact.phone}</li>`
                  : ``
              }</li>
              ${
                pet.contact.email
                  ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
                  : ``
              }
              <li class="list-group-item">Shelter ID: ${pet.organization_id}</li>
            </ul>
          
          </div>
          <div class="col-sm-6">
          <img class="img-fluid rounded-circle mt-2" src="${
            pet.photos[0] ? pet.photos[0].medium : ""
          }">
          </div>
        </div>
      `;
      results.appendChild(div);
    });
  }

    


