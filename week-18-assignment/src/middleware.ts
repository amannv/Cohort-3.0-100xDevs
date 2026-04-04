import jwt from "jsonwebtoken";
import "dotenv/config";
import type { NextFunction, Request, Response } from "express";

const middleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({
      message: "User not verified",
    });
  }

  const userVerified = jwt.verify(token, process.env.JWT_SECRET as string) as {
    email: string;
    id: number;
  };

  if (userVerified) {
    req.userId = userVerified.id;
    next();
  }
};

export default middleware;
