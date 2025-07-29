const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovekajal"
const app = express();
app.use(express.json());
const path = require("path");

const users = [];
const todos = [];

// function logger(req, res, next) {
//     console.log(req.method + " method ");
//     next();
// }

app.use(express.static(path.join(__dirname, "public"))); 

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });

    console.log(users);

});


app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            foundUser = users[i];
        }
    }

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
        // foundUser.token = token;
        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }

    console.log(users);

});


function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    } else {
        res.json({
            message: "You are not logged in"
        });
    }

}


app.get("/me", auth, function (req, res) {
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == req.username) {
            foundUser = users[i];
        }
    }
    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        });
    } else {
        res.json({
            message: "user not found"
        });
    }

});


app.get("/todos", auth, function (req, res) {
    const currentUser = req.username;

    if (!currentUser) {
        return res.json({
            message: "User is not signed in"
        }
        )
    }

    const userTodos = [];

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].username == currentUser) {
            userTodos.push(todos[i].title);
        }
    }
    res.json({
        todos: userTodos
    });
});


app.post("/createTodos", auth, function (req, res) {
    const title = req.body.title;

    const currentUser = req.username;

    if (!title) {
        return res.json({
            message: "Title cannot be empty"
        })
    }

    if (title.lengh < 5) {
        return res.json({
            message: "Title is small"
        })
    }

    const newTodo = {
        id: todos.length + 1,
        username: currentUser,
        title: title,
        done: false
    }

    todos.push(newTodo);
    res.json({
        message: "Todo is created!"
    })

});

app.put("/updateTodos/:id", auth, function (req, res) {
    const id = Number(req.params.id);

    const title = req.body.title;

    const currentUser = req.username;

    let todoFound = false;

    if (!title) {
        return res.json({
            message: "Title cannot be empty"
        })

    };

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].username == currentUser && todos[i].id == id) {
            todos[i].title = title;
            todoFound = true;
            break;
        }

    }

    if (!todoFound) {
        return res.json({
            message: "There are no Todos"
        })
    }


    res.json({
        message: "Todo updated successfully"
    })
});

app.delete("/deletetodo/:id", auth, function (req, res) {
    const currentUser = req.username;

    const id = Number(req.params.id);

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].username == currentUser && todos[i].id == id) {
            todos.splice(i, 1);
            return res.json({
                message: 'Todo deleted successfully'
            });

        }
    }
    res.json({
        message: "Todo not found"
    })
});

app.put("/todos/:id/done", auth, function (req, res) {
    const id = Number(req.params.id);

    const currentUser = req.username;

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].username == currentUser && todos[i].id == id) {
            todos[i].done = !todos[i].done;
            return res.json({
                message: "Todo done successfully",
                todo: todos[i]
            });
        }
    }
    res.json({
        message: "Todo not found"
    });

});


app.listen(3000, () => {
    console.log("Server is running at port 3000");
});