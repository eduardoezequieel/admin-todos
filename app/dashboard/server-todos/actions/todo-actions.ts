'use server';

import prisma from '@/app/lib/prisma';
import { Todo } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import * as yup from 'yup';

export const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  await sleep(3);
  const todo = await prisma.todo.findFirst({ where: { id } });

  if (!todo) throw `Todo con id ${id} no encontrado`;

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath('/dashboard/server-todos');

  return updatedTodo;
};

export const createTodo = async (description: string): Promise<Todo | { message: string }> => {
  try {
    const todo = await prisma.todo.create({
      data: { complete: false, description },
    });

    revalidatePath('/dashboard/server-todos');
    return todo;
  } catch (error) {
    return {
      message: 'Error al crear el todo',
    };
  }
};

export const deleteCompleted = async () => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath('/dashboard/server-todos');
};
