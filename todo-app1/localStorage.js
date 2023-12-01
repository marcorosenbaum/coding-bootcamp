export function readTodosFromLocalStorage() {
  const todosFromStorage = localStorage.getItem("todos");
  if (todosFromStorage !== null) {
    return JSON.parse(todosFromStorage);
  }
}
