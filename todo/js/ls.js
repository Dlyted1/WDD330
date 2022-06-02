const TODO_LIST = "todoList";

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST);

    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;

}

function saveTodo(todo) {
    let todoList = getTodoList();

    todoList.push(todo);

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));

}

function deleteTodo(id) {
    console.log(id);
    const todoList = getTodoList();

    let updatedList = todoList.filter( todo => todo.id != id);

    localStorage.setItem(TODO_LIST, JSON.stringify(updatedList));

}

function toggleComplete(todo)  {
    const JSONtodo = JSON.parse(todo);
    console.log(todo.id);
    let todoList = getTodoList();
    if (!JSONtodo.completed) {
        JSONtodo.completed = true;
    } else {
        JSONtodo.completed = false;
      
    }
     for( var i = 0; i < todoList.length; i++) {
         if ( todoList[i] == JSONtodo) {
             todoList.splice(i, 1);
         }
     }


    // not struck through
     if (!JSONtodo.completed) {
        todoList.push(JSONtodo);  
     } else {
         todoList.push(strikeThrough(JSONtodo));
     }
    

     

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));

}
function strikeThrough(text) {
    return text
      .split('')
      .map(char => char + '\u0336')
      .join('')
  }

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    toggleComplete
}