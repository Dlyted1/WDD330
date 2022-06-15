// connect to websocket
const URL = 'wss://echo.websocket.org/';

//store a reference to the <div> element where we will be displaying the messages
const outputDiv = document.getElementById('output');

//store a reference to the form element
const form = document.forms[0];

// refers to the websocket connection throughout the program
const connection = new WebSocket(URL);

//when connected to URL it fires an event called open
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);

// The output() is used to output messages to the screen
function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    outputDiv.appendChild(para);
}

form.addEventListener('submit', message, false);

function message(event) {
    event.preventDefault();
    const text = form.message.value;
    output(`SENT: ${text}`);
    connection.send(text);
}

connection.addEventListener('message', (event) => {
    output(`RESPONSE: ${event.data}`);
}, false);