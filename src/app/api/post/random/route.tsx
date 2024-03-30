import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  // return a random post
  try {
    let count_posts = await prisma.post.count();

    let random = Math.floor(Math.random() * count_posts);

    console.log(random);
    let post = await prisma.post.findFirst({
      skip: random,
    });

    return NextResponse.json(post, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
