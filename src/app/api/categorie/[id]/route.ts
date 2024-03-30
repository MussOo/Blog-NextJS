import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  try {
    let categories = await prisma.category.findUnique({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
