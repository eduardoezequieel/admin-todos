import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import * as yup from 'yup';

interface Args {
  params: {
    uuid: string;
  };
}

export const GET = async (request: Request, { params }: Args) => {
  const { uuid } = params;

  const todo = await prisma.todo.findFirst({
    where: {
      id: uuid,
    },
  });

  if (!todo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });

  return NextResponse.json({ todo });
};

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional().default(false),
});

export const PUT = async (request: Request, { params }: Args) => {
  try {
    const { uuid } = params;

    const { description, complete } = await putSchema.validate(await request.json());

    const todo = await prisma.todo.update({
      data: { description, complete },
      where: { id: uuid },
    });

    if (!todo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });

    return NextResponse.json({ todo });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};

export const DELETE = async (request: Request, { params }: Args) => {
  try {
    const { uuid } = params;

    const todo = await prisma.todo.delete({
      where: { id: uuid },
    });

    if (!todo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });

    return NextResponse.json({ todo });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
};
