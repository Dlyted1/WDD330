// select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables
let LIST, id;
// let LIST = [], id = 0;

//get item from local storage
let data = localStorage.getItem("TODO");


//if there is data
if(data) {
    LIST = JSON.parse(data);
    id = LIST.length; //set id to last one in list
    loadList(LIST); //loads list to user interface
}
else{
    LIST = [];
    id = 0;
}

//load items to users interface
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}
// clear local storage
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});



//Show date
const options = {weekday: 'long', month: 'short', day: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//to do function
function addToDo(toDo, id, done, trash) {
    if (trash)
        return;
    // if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}"> ${toDo} </p>
    <i class="far fa-trash-alt" job="delete" id="${id}"></i>
    </li>
    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

//Add item to list
document.addEventListener("keyup",function(even) {  // "keypress"
    if(event.keyCode == 13){
    const toDo = input.value; 


        // when input isn't empty
        if(toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id : id,
                done: false,
                trash : false
            });
            //below line needs to be added everywhere the LIST array is updated(copy & paste code)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
            input.value = ""; 
        }       
});

//complete todo and toggle
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove todo
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//eventlistener to target items created
list.addEventListener("click", function(event) {
    const element = event.target; //return clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if(elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }
    //below line needs to be added everywhere the LIST array is updated(copy & paste code)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
