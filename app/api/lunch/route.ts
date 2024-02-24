import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/libs/client";

export const GET = async (request: NextRequest) => {
  const lunch = await prisma.lunch.findMany();
  return NextResponse.json(lunch);
};
