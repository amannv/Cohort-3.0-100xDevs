let todos = [];

//state
function addTodo() {
    todos.push({
        title:document.querySelector(".input").value
    })
    render();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}


//component
function createTodoComponent(todo, index) {
     const divEl = document.createElement("div");
        const h3El = document.createElement("h3");
        const btnEl = document.createElement("button");
        h3El.innerHTML = todo.title;
        btnEl.innerHTML = "Delete";
        btnEl.addEventListener("click", () => {
            deleteTodo(index);

        });
        divEl.appendChild(h3El);
        divEl.appendChild(btnEl);
        return divEl;

}


//react
function render() {
    const todoscontainer = document.querySelector(".todos-container");
    todoscontainer.innerHTML = "";
    for (let i=0; i < todos.length; i++) {
       const element = createTodoComponent(todos[i], i);
        todoscontainer.appendChild(element);
    }
}