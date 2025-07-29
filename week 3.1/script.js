function addTodo(){
const inputEL = document.querySelector("input");
const value = inputEL.value;
console.log(value);
}

function callback(){
    const el = document.querySelector("input");
    const el1 = el.value
    console.log(el1);
}
setTimeout(callback, 1000);