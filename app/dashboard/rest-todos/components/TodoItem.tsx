'use client';

import { Todo } from '@prisma/client';
import styles from './TodoItem.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => void;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
        <div
          onClick={() => toggleTodo(todo.id, !todo.complete)}
          className={`flex cursor-pointer rounded-md p-2 hover:bg-opacity-60 ${todo.complete ? 'bg-blue-100' : 'bg-red-100'}`}
        >
          {todo.complete ? <IoCheckboxOutline size={30} /> : <IoSquareOutline size={30} />}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
