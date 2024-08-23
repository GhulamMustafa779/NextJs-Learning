import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// GET a user
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user) return NextResponse.json({ error: "user doesn't exist" });

  return NextResponse.json(user);
}

// UPDATE a user
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const oldUser = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!oldUser)
    return NextResponse.json({ error: "User doesn't exists" }, { status: 400 });

  if (oldUser.email === body.email && oldUser.name === body.name)
    return NextResponse.json(
      { error: "Same user credentials!" },
      { status: 400 }
    );

  if (oldUser.email === body.email)
    return NextResponse.json(
      { error: "Email already in use!" },
      { status: 400 }
    );

  const updatedUser = await prisma.user.update({
    where: {
      id: oldUser.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  console.log(updatedUser);

  return NextResponse.json(updatedUser, { status: 200 });
}

// DELETE a user
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  return NextResponse.json({ message: "User delete" }, { status: 200 });
}
