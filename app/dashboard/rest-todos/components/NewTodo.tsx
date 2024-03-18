'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { createTodo, deleteCompleted } from '../../server-todos/actions';

export const NewTodo = () => {
  const [description, setDescription] = useState('');
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    await createTodo(description);
    setDescription('');
  };

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="-ml-10 w-6/12 rounded-lg border-2 border-gray-200 py-2 pl-3 pr-3 outline-none transition-all focus:border-sky-500"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="ml-2 flex items-center justify-center rounded bg-sky-500 p-2 text-white transition-all hover:bg-sky-700"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={async () => await deleteCompleted()}
        type="button"
        className="ml-2 flex items-center justify-center rounded bg-red-400 p-2 text-white transition-all hover:bg-red-700"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
