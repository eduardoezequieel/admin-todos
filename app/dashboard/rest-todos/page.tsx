import prisma from '@/app/lib/prisma';
import { NewTodo, TodosGrid } from './components';

const RestTodosPage = async () => {
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
export default RestTodosPage;
