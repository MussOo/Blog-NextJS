import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const GET = async (
  req: NextApiRequest,
  { params }: { params: { id: string } }
) => {
  try {
    let posts = await prisma.post.findMany({
      where: {
        category_id: parseInt(params.id),
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
