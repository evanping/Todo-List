
import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db"
import Link from "next/link";
import { ClearButton } from "./clearButton";


function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: {id}, data: {complete}})
}

export default async function Home() {

  const todos = await getTodos()

  return <>
    <header className="flex justify-between mb-4 items-center">
      <h1 className="text-2xl">To-dos</h1>
      <div className="flex gap-1 justify-end">
        <ClearButton/>
        <Link
          className = "border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
          href="/new"
        >
          New Item
        </Link>
      </div>
      
    </header>
    <ul className="pl-4">
      {todos.map(todo => 
        //<li key={todo.id}>{todo.title}</li>
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
      )}
      
    </ul>
  
  </>
}