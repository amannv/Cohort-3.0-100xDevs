import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { type Request, type Response } from "express";
import { prisma } from "../lib/prisma";

const app = express();
app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  const { email, firstName, lastName, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 5);

  const userCreated = await prisma.user.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
    },
  });

  if (userCreated) {
    return res.status(200).json({
      message: "User signed up successfully",
    });
  }
});

app.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userCreated = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!userCreated) {
    return res.status(400).json({
      message: "User not found!",
    });
  }

  const passwordMatch = await bcrypt.compare(password, userCreated.password);

  if (!passwordMatch) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  const userId = userCreated.id;

  const token = jwt.sign(
    {
      email,
      userId,
    },
    process.env.JWT_SECRET as string,
  );

  return res.status(200).json({
    token,
    message: "User successfully signed in",
  });
});
