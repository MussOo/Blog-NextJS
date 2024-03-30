"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";
import { json } from "stream/consumers";
import { Post } from "@prisma/client";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  let id = params.id;

  try {
    let post: Post = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: { nbViews: { increment: 1 } },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error : " + error }, { status: 500 });
  }
  return NextResponse.json(
    { message: "id are equal : " + id },
    { status: 200 }
  );
};
