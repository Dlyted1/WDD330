const TODO_LIST = "todoList";
//const ACTIVE_LIST = "activeList";
//const COMPLETED_LIST = "completedList";

//function getActiveList() {
//    let activeListString = localStorage.getItem(ACTIVE_LIST);

//    let activeList = [];

//    if (activeListString) {
//        activeList = JSON.parse(activeListString);
 //   }

 //   return activeList;

 // } 

function getcompletedList() {
    let completedListString = localStorage.getItem(COMPLETED_LIST);

    let completedList = [];

    if (completedListString) {
        completedList = JSON.parse(completedListString);
    }

    return completedList;

} 

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
   // let activeList = getActiveList();
    todoList.push(todo);
  //  activeList.push(todo);


    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
    // localStorage.setItem(ACTIVE_LIST, JSON.stringify(activeList));

}

function deleteTodo(id) {
    console.log(id);
   // const activeList = getActiveList();
   // const completedList = getcompletedList();
    const todoList = getTodoList();

   // let updatedcompletedList = completedList.filter( todo => todo.id != id);
    let updatedtodoList = todoList.filter( todo => todo.id != id);
   // let updatedactiveList = activeList.filter( todo => todo.id != id);

    localStorage.setItem(TODO_LIST, JSON.stringify(updatedtodoList));
   // localStorage.setItem(ACTIVE_LIST, JSON.stringify(updatedactiveList));
   // localStorage.setItem(COMPLETED_LIST, JSON.stringify(updatedcompletedList));

}

function toggleComplete(id)  {
//    let activeList = getActiveList();
//    let completedList = getcompletedList();
//   if (activeList.includes(id)) {
//    for( var i = 0; i < activeList.length; i++) {  // take out the todo
//        if ( activeList[i] == id) {
//            activeList.splice(i, 1);
//        }   
//   } 
//   completedList.push(id);
// } else if (completedList.includes(id)) {
//    for( var i = 0; i < completedList.length; i++) {  // take out the todo
//        if ( completedList[i] == id) {
//            completedList.splice(i, 1);
//        }   
//   } 
//   activeList.push(id);
// } else
//  console.log("nothing");

//    localStorage.setItem(COMPLETED_LIST, JSON.stringify(completedList));
//    localStorage.setItem(ACTIVE_LIST, JSON.stringify(activeList));
    
  const todos = getTodoList()

  todos.forEach(todo => {
      if (todo.id == id) todo.completed = !todo.completed
  })

  saveList(todos)
}

function saveList(todos) {
    localStorage.setItem(TODO_LIST, JSON.stringify(todos))  
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