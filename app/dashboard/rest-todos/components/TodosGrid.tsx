'use client';

import { Todo } from '@prisma/client';
import { TodoItem } from '.';
import { updateTodo } from '../helpers';
import { useRouter } from 'next/navigation';
import { toggleTodo } from '../../server-todos/actions';

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  // const toggleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await updateTodo(id, complete);
  //   router.refresh();
  // };

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem toggleTodo={toggleTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
