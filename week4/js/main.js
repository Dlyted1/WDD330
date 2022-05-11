const form = document.forms[0];

// above same as below
// const form = document.getElementsByTagname('form')[0];
// const form = document.forms.search;

const input = form['searchInput']



// focus event
const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);

// Blur Event event occurs when the user moves the focus away from the form element.
input.addEventListener('blur', () => alert('blurred'), false);

// Submit Form - Event Listener
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search() {
    alert(' Form Submitted');
   
}
