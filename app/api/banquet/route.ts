import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/libs/client";

export const GET = async (req: NextRequest) => {
  const banquet = await prisma.banquet.findMany();
  return NextResponse.json(banquet);
};
