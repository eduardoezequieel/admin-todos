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

  console.log(uuid);

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

    console.log(params);
    const { description, complete } = await putSchema.validate(await request.json());

    const todo = await prisma.todo.update({
      data: { description, complete },
      where: { id: uuid },
    });

    if (!todo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });

    return NextResponse.json({ todo });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
};