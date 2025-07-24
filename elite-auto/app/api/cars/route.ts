// app/api/cars/route.ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const cars = await prisma.car.findMany({
    include: { owner: true },
  });
  return Response.json(cars);
}

export async function POST(req: Request) {
  const body = await req.json();
  const car = await prisma.car.create({
    data: {
      title: body.title,
      price: body.price,
      mileage: body.mileage,
      year: body.year,
      ownerId: body.ownerId,
    },
  });
  return Response.json(car);
}
