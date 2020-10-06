//TO-DO

let todoList = [];
let todoListElement = document.querySelector("#myUL");
document.querySelector("#todo_button").addEventListener("click", addTodo)
document.querySelector("#myInput").addEventListener("keyup", (e) =>{
    if(e.keyCode == 13){addTodo()}
})

function addTodo(){
    let todoText = document.querySelector("#myInput").value;

    let todoObject = {
        id : todoList.length,
        todoText : todoText,
        isDone: false
    };

    todoList.push(todoObject);
    displayTodos()
}

function doneTodo(todoId){
    const selectedTodoId = todoList.findIndex(myTodo => myTodo.id == todoId)
    if(!todoList[selectedTodoId].isDone){todoList[selectedTodoId].isDone = true;
    }else{todoList[selectedTodoId].isDone = false;}
    displayTodos()
}

function displayTodos(){
    todoListElement.innerHTML = ""
    todoList.forEach((item)=>{
        const todoElement = document.createElement("li");
        todoElement.innerText = item.todoText;
        todoElement.setAttribute("data-id", item.id);

        if(item.isDone){todoElement.classList.add("checked")}

        todoListElement.appendChild(todoElement)
        document.querySelector("#myInput").value = ""

        todoElement.addEventListener("click", (e) =>{
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId)

        todoElement.addEventListener("dblclick", (e) =>{
            const selectedId = e.target.getAttribute("data-id");
            delItem(selectedId)})
    })
        
    })
}

function delItem(id){
    const selectedId = todoList.findIndex(item => item.id == id)
   
    delete todoList[selectedId]

    displayTodos()
}