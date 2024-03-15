import { Todo } from '@prisma/client';

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const dbTodo: Todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ complete }),
  }).then((res) => res.json());

  return dbTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const dbTodo: Todo = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  }).then((res) => res.json());

  return dbTodo;
};

export const deleteCompleted = async (): Promise<boolean> => {
  await fetch('/api/todos', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());

  return true;
};
