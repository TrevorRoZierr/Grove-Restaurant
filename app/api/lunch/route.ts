import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/libs/client";

export const GET = async (request: NextRequest) => {
  const lunch = await prisma.lunch.findMany();
  return NextResponse.json(lunch);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const lunch = await prisma.lunch.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
};
