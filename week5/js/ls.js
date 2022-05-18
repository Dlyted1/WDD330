const TODO_LIST = "todoList";

function getTodoList(){

}

function saveTodo(todo) {
    let todoList = getTodoList();

    todoList.push(todo);

    localStorage.setItem(TODO_LIST, JSON.stringify(todoList))

}

function deleteTodo(id) {

}

export default {
    saveTodo,
    deleteTodo,
    getTodoList
}