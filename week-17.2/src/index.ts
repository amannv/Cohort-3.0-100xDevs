import { Client } from "pg";
import { type Request, type Response } from "express";
import express from "express";

const app = express();
app.use(express.json());

const pgClient = new Client({
  connectionString:
    "",
});
pgClient.connect();

app.post("/signup", async (req: Request, res: Response) => {
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const street = req.body.street;
  const country = req.body.country;
  const pincode = req.body.pincode;

  try {
    const insertQuery = `INSERT into users(email, password) VALUES ($1, $2) RETURNING id;`;
    const addressQuery = `INSERT into addresses(user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`;

    await pgClient.query("BEGIN;");
    const response = await pgClient.query(insertQuery, [email, password]);
    const user_id = response.rows[0].id;
    const insertAddressResponse = await pgClient.query(addressQuery, [
      user_id,
      city,
      country,
      street,
      pincode,
    ]);
    await pgClient.query("COMMIT;");

    res.json({
      message: "You have signed up",
    });
  } catch (e) {
    res.json({
      message: "Error while signing up",
    });
  }
});

app.get("/metadata", async (req: Request, res: Response) => {
  const id = req.query.id;

  const query = `SELECT users.id, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = $1;`;

  const response = await pgClient.query(query, [id]);

  res.json({
    response: response.rows,
    message: "User fetched successfully",
  });
});

app.listen(3000);
