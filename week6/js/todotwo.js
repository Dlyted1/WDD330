const clear = document.querySelector(".clear");



const dateElement = document.getElementById("date");





const list = document.getElementById("list");
list.addEventListener("click", function(event){
    let element = event.target;
    const elementJOB = event.target.attributes.job.value;
    if(elementJOB == "complete"){
        completeToDo(element);
    }else if (elementJOB == "delete"){
        removeToDo(element);
    }
});


const CHECK ="fa-check-circle";
const UNCHECK "fa-circle-thin";
const LINE_THROUGH ="lineThrough";

function addToDo(toDo ,id,done , trash){
    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH: "";

    const text = `<li class="item">
        <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
        <p class="text ${LINE}"> ${toDo} </p>
        <i class="fa fa-trash-o delete" job="delete" id="${id}"></i>

    </li>`

    const position = "beforeend";
    list.insertAdjacentHTML(position, text);
}

addToDo("Feed Horses");



const input = document.getElementById("input");

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13){
        const toDo = input.value;
            if(todo){
                addToDo(toDo,id, false, false);
                list.push(
                    {
                        name: toDo,
                        id: id,
                        done: false,
                        trash: false
                    }
            );
            input.value = "";
            id++;

        }
    }

});

//element.classList.toggle(CLASS) {
//    if ("CLASS exists, remove CLASS");
 //   } else {
//        CLASS !exists, add CLASS
// }
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
         LIST[element.id].done = LIST[element.id].done ? false : true;

}

                        LIST[0]: { item: "Feed Horses",
                                   id : 0
                                   done : false,
                                   trash : false
                                 }

function removeToDo (element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}