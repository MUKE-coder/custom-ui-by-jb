import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, categoryId, imageUrl } = await request.json();

    const component = await db.component.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
      },
    });
    console.log(component);
    return NextResponse.json(component);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a component",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const components = await db.component.findMany({
      orderBy: {
        createdAt: "desc", //Latest category
      },
      include: {
        variations: true,
      },
    });
    return NextResponse.json(components);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch components",
      },
      {
        status: 500,
      }
    );
  }
}
