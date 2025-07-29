const { response } = require("express");

function movetoSignUp() {
    document.getElementById("signup-container").style.display = "block";
    document.getElementById("sigin-container").style.display = "none";
    document.getElementById("todoscontainer").style.display = "none";
}

function movetoSignIn() {
    document.getElementById("signin-container").style.display = "block";
    document.getElementById("signupcontainer").style.display = "none";
    document.getElementById("todoscontainer").style.display = "none";
}

function movetoTodos() {
    document.getElementById("signin-container").style.display = "none";
    document.getElementById("signupcontainer").style.display = "none";
    document.getElementById("todoscontainer").style.display = "block";
    getTodos();
}


async function signup() {
    const username = document.getElementById("signup-usr").value;
    const password = document.getElementById("signup-pass").value;

    try {
        const response = await axios.post("http://localhost:3000/signup", {
            username: username,
            password: password
        });

        alert(response.data.message);

        if (response.data.message === "You are signed up") {
            movetoSignIn();
        }
    } catch (error) {
        console.error("error while sigining up:", error);
    }
}

async function signin() {
    const username = document.getElementById("signup-usr").value;
    const password = document.getElementById("signup-pass").value;

    try {
        const response = await axios.post("http://localhost:3000/signin", {
            username: username,
            password: password
        });
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            alert(response.data.message);
            movetoTodos();
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error("Error while signing in", error);
    }
}


async function logout() {
    localStorage.removeItem("token");

    alert("You are logged out successfully!");

    movetoSignIn();
}

async function getTodos() {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/todos", {
            header: { Authorization: token },
        });

        const todoList = document.getElementById("todos-list");

        todoList.innerHTML = "";

        if (response.data.lengh) {
            response.data.forEach((todo) => {
                const todoElement = createTodoElement(todos);
                todoList.appendChild(todoElement);
            });
        }
    } catch (error) {
        console.error("Error while getting todo list", error);
    }
}

async function addTodo() {
    const todoEl = document.getElementById("input");
    const title = todoEl.value;

    if (title.trim() === "") {
        alert("Write some Todos");
        return;
    }

    try {
        const token = localStorage.getItem("token");

        await axios.post("http://localhost:3000/createTodos",
            { title },
            {
                headers: { Authorization: token },
            }
        );
        todoEl.value = "";

        getTodos();
    } catch (error) {
        console.error("Error while adding a New Todo Item", error);
    }
}

async function updateTodo(id, newTitle) {
 
    const token = localStorage.getItem("token");

 try {
  await axios.put(`http://localhost:3000/uodateTodos/${id}`,
            { title: newTitle},
            {
                headers: { Authorization: token },
            }
    );
    getTodos();
} catch (error) {
    console.error("Error while updating todo", error);
}
}

async function deleteTodo(id) {

    const token = localStorage.getItem("token");

    try {
        await axios.delete(`http://localhost:3000/deletetodo/${id}`,
            { Authorization: token},
        );
        getTodos();
    } catch (error) {
        console.error("Error while deleting the Todo", error);
    }
}