let ctr = 0;

function deleteTodo(index){
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);

}
function addTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;
    
    const newEl = document.createElement("div");
    newEl.setAttribute("id", ctr);
    newEl.innerHTML = "<div>" + value + "</div><button onclick='deleteTodo(" + ctr + ")'>Delete</button>";
    const parentEl = document.querySelector(".container");
    parentEl.appendChild(newEl);
    ctr = ctr + 1;

}
