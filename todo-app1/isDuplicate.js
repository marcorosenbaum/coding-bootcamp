import { todos } from "./localStorage.js";

export function isDuplicate(todo) {
  todo = todo.toLowerCase();

  for (let i = 0; i < todos.length; i++) {
    const currentTodo = todos[i];
    if (currentTodo.todo.toLowerCase() === todo) {
      return true;
    }
  }
  return false;
}
