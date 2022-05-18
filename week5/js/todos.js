import utils from './utils.js';
import ls from './ls.js';

//On click handler to button
document.querySelector("#addBtn").onclick = addNewTodo;
// Get Input
const input = document.querySelector('#todoInput');
//add on Enter
input.addEventListener('keypress', e => {
    if (e.keycode == '13') addNewTodo();
})

LoadTodos();

function addNewTodo(e) {
     const todo = { id: Date.now(), content: input.ariaValueMax, completed: false };
     // reset the input field
     input.value = '';
     
     // Add to the UI
     const todoItem = createTodoItem(todo);

     //Save to localStorage ls
     ls.saveTodo(todo);

     loadTodos();   
}

function createTodoItem(todo) {

}

function addToList(todoDiv) {

}

function loadTodos() {
    document.querySelector('#todos').innerHTML = '';
    const todoList = ls.getTodoList();
    // debugging
    console.log(todoList)

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
    })
}

function deleteTodo(e) {

}