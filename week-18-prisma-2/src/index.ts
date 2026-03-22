import { PrismaClient } from "@prisma/client";
import express from "express";
import { type Request, type Response } from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient({
    log: [
        {
            level: "query",
            emit: "event",
        },
    ],
});

client.$on("query", (e) => {
    console.log("Query:" + e.query);
    console.log("Params:" + e.params);
    console.log("Duration:" + e.duration + "ms");
});


const getUserAndItsTodos = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1,
        },
        include: {
            todos: true
        }
})

console.log(user);

}

app.get("/users", async (req: Request, res: Response) => {
    const users = await client.user.findMany({})
    return res.json({
        users,
        message: "Here are the User"
    });
});

app.get("/todos/:id", async(req: Request, res: Response) => {
    const id = req.params.id;
    const todos = await client.user.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            todos: true,
        }
    });
    res.json({
        todos,
        message: "Here are the Todos"
    });
});

app.listen(3000, () => {
    console.log("Server is listening on Port 3000");
})