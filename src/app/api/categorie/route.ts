import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let categories = await prisma.category.findMany();
    console.log(categories);
    return NextResponse.json(categories, { status: 200 });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
