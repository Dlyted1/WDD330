import {isValidZip, showAlert } from "./validate";

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

