import db from "@/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const component = await db.component.findUnique({
      where: { slug },
      include: {
        variations: true,
      },
    });
    return NextResponse.json(component);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch component",
      },
      {
        status: 500,
      }
    );
  }
}
