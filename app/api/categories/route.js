import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title,type, description } = await request.json();

    const category = await db.category.create({
      data: {
        title,
        type,
        description,
      },
    });
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a category",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc", //Latest category
      },
      include:{
        components:true
      }
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch categories",
      },
      {
        status: 500,
      }
    );
  }
}
