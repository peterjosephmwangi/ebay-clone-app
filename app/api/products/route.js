import prisma from "@/app/libs/Prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.products.findMany();
    // await prisma.$disconnect();
    // return NextResponse.json(products);
    if (product) {
      console.log("Product:", product);
      return NextResponse.json(products);
    } else {
      console.error("Product not found");
      return new NextResponse("Product not found", { status: 404 });
    }
  } catch (error) {
    console.log(error);
    // await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
