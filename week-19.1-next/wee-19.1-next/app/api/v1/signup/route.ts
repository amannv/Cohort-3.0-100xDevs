import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const userCreated = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
    },
  });

  if (userCreated) {
    return NextResponse.json({
      message: "You are signed up!",
    });
  }
}
