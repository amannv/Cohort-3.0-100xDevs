import { Client } from "pg";
import { type Request, type Response } from "express";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client(
  "",
);
pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  try {
    const insertQuery = `INSERT into users(username, email, password) VALUES ($1, $2, $3);`;

    const response = await pgClient.query(insertQuery, [username, email, password]);

    res.json({
      message: "You have signed up",
    });
  } catch (e) {
    res.json({
      message: "Error while signing up",
    });
  }
});

app.listen(3000);
