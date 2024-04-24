import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
import client from "@/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  return Response.json({
    message: "you are logged in",
  });
}
