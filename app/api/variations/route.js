import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, componentId, codeString, description } =
      await request.json();

    const variation = await db.variation.create({
      data: {
        title,
        componentId,
        codeString,
        description,
      },
    });
    console.log(variation);
    return NextResponse.json(variation);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a variation",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const variations = await db.variation.findMany({
      orderBy: {
        createdAt: "desc", //Latest category
      },
    });
    return NextResponse.json(variations);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch Variations",
      },
      {
        status: 500,
      }
    );
  }
}
