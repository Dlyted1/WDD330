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
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete button
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');

    //todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    //delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;

}

function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);

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