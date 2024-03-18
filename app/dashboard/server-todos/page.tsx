import prisma from '@/app/lib/prisma';
import { NewTodo, TodosGrid } from '../rest-todos/components';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ServerTodosPage = async () => {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
  return (
    <div>
      <div className="mx-5 mb-5 w-full px-3">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
};
export default ServerTodosPage;
