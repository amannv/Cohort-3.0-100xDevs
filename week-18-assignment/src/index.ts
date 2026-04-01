import express from "express";
import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma"

const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {

    const { email, firstName, lastName, password } = req.body;

    const userCreated = await prisma.user.create({
        data: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
        }
    });

    if(userCreated) {
        return res.status(200).json({
            message: "User signed up successfully",
        });
    }
});