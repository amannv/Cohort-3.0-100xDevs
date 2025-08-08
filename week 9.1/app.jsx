import { useState } from "react";


export default function app() {
    const [todos, setTodos] = useState([{
        title: "Go to gym",
        description: "Go to gym at 5 PM",
        done: true
    }]);


    function addTodos() {
        let newArray = [];
        for (let i = 0; i < todos.length; i++) {
            newArray.push(todos[i]);
        }
       newArray.push({
        title: "Eat FOOD",
        description: "Eat food at 5 PM",
        done: true
       });
       setTodos(newArray);
    }

    return (<div>
        <input type="text" placeholder="Type Todos"></input>
        <input type="text" placeholder="Type Description"></input>
        <br/>
    <button onClickHandler={addTodos}></button>
    <br/>
    {JSON.stringify(todos)}
    </div>);
}
