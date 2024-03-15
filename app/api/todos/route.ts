import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get('take') || '10';
  const skip = searchParams.get('skip') || '0';

  if (isNaN(+take) || isNaN(+skip))
    return NextResponse.json({ error: 'Search params must be numbers' }, { status: 400 });

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });

  return NextResponse.json(todos);
};

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export const POST = async (request: Request) => {
  try {
    const { complete, description } = await postSchema.validate(await request.json());
    const todo = await prisma.todo.create({
      data: { complete, description },
    });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const todo = await prisma.todo.deleteMany({
      where: { complete: true },
    });

    return NextResponse.json({ todo });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};
