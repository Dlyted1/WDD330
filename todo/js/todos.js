import utils from './utils.js';
import ls from './ls.js';

//loadTodos();
//On click handler to button
document.querySelector("#addBtn").onclick = addNewTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;

// Get Input
const input = document.querySelector('#todoInput');
//add on Enter
input.addEventListener('keypress', e => {
    if (e.keycode == '13') addNewTodo();
})

// load the list
loadTodos();
// step 1
function addNewTodo(e) {
     const todo = { id: Date.now(), content: input.value, completed: false };
     console.log(todo.content)
     // reset the input field
     input.value = '';
     
     // Add to the UI
     const todoItem = createTodoItem(todo);

     //Save to localStorage ls
     ls.saveTodo(todo);

     loadTodos();   
}

// step 2 function createTodo {}
function createTodoItem(todo) {
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete button
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = "✓";   
      

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

// step 3 ?
//function createTodoElement('todo') {
//onclick = textDecoration='line-through';
//}

// step 4
function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);

}
// step 0
function loadTodos() {
    document.querySelector('#todos').innerHTML = '';
    const todoList = ls.getTodoList();
    // debugging
    // console.log(todoList)

    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addToList(el);
    })
}

//events
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();

}


function toggleComplete() {
    
  }

function applyFilter(e) {
    // clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos
    }


    // draw the list
    filteredTodos.forEach( todo => {
        const el = createTodoItem(todo)
        addToList(el)
    })


}