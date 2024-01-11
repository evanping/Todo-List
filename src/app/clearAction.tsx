"use server"
import { prisma } from "@/db"

export async function handleClear() {

  const completedTodos = await prisma.todo.findMany({
    where: { complete: true },
  });

  for (const todo of completedTodos) {
    await prisma.todo.delete({ where: { id: todo.id } });
  }
  
}