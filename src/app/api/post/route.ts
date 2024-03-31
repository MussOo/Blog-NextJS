import { createSearchParamsBailoutProxy } from "next/dist/client/components/searchparams-bailout-proxy";
import { NextRequest, NextResponse } from "next/server";
import { parseArgs } from "util";
import prisma from "../../../../lib/prisma";
import { defineDmmfProperty } from "@prisma/client/runtime/library";

export const GET = async (req: NextRequest) => {
  let params = req.nextUrl.searchParams ?? {};

  let order = params.get("order") ?? "desc";
  let sort = params.get("sort") ?? "date";

  let or = {};
  or[sort] = order;

  let ors = [];
  ors.push(or);
  console.log(or);
  try {
    let posts = await prisma.post.findMany({
      orderBy: ors,
    });
    return NextResponse.json(posts ?? [], { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Error : " + e }, { status: 500 });
  }
};
