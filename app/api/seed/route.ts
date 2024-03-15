import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Learn React', complete: true },
      { description: 'Learn Next.js' },
      { description: 'Learn Prisma' },
      { description: 'Build a fullstack app' },
    ],
  });
  return NextResponse.json({ message: 'Seed executed' });
};
