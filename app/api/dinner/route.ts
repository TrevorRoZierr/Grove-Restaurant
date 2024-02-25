import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/libs/client";

export const GET = async (req: NextRequest) => {
  const dinner = await prisma.dinner.findMany();
  return NextResponse.json(dinner);
};
