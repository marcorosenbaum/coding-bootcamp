"use strict";

const filterSelection = document.querySelector("#filter-selection");
const todoList = document.querySelector("#todo-list");
const inputNewTodo = document.querySelector("#input-new-todo");

const btnAdd = document.querySelector("#btn-add");
const btnRemoveAll = document.querySelector("#btn-remove-all");
const btnRemoveDone = document.querySelector("#btn-remove-done");

const filterAll = document.querySelector("#filter-all");
const filterDone = document.querySelector("#filter-done");
const filterOpen = document.querySelector("#filter-open");

let todoState = {
  currentFilter: "",
  todos: [],
};

// load data from backend
function loadData() {
  fetch("http://localhost:4730/todos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((todosFromApi) => {
      todoState.todos = todosFromApi;
      renderState();
    })
    .catch((error) => console.error(error));
}

// * * * * UPDATE STATE * * * * / not finished
function updateState() {}

// * * * * RENDER STATE * * * *
function renderState() {
  todoList.innerHTML = "";

  // check the currentFilter und set the input on checked
  if (todoState.currentFilter === "all") {
    filterAll.checked = "true";
  }
  if (todoState.currentFilter === "open") {
    filterOpen.checked = "true";
  }
  if (todoState.currentFilter === "done") {
    filterDone.checked = "true";
  }

  // render state depending on filter
  const generatedState = generateFilterState();

  generatedState.todos.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.innerText = todo.description;
    newLi.id = todo.id;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoList.appendChild(newLi);
    newLi.appendChild(checkbox);

    // style by reload
    if (todo.done === true) {
      newLi.style.textDecoration = "line-through";
      checkbox.checked = "true";
    }
  });
}

// * * * * STATE DEPENDING ON FILTER * * * *
function generateFilterState() {
  let filteredState = {};

  switch (todoState.currentFilter) {
    case "done":
      filteredState.todos = todoState.todos.filter((todo) => {
        return todo.done === true;
      });
      return filteredState;
    case "open":
      filteredState.todos = todoState.todos.filter(
        (todo) => todo.done === false
      );

      return filteredState;
    case "all":
      return (filteredState = todoState);
    default:
      return (filteredState = todoState);
  }
}

// * * * * ADD TODO * * * *
btnAdd.addEventListener("click", () => {
  if (inputNewTodo.value.trim().length > 0) {
    // check for duplicate, case insensitive
    const included = todoState.todos.some(
      (todo) =>
        todo.description.toLowerCase() ===
        inputNewTodo.value.trim().toLowerCase()
    );
    if (!included) {
      const newTodo = { description: inputNewTodo.value, done: false };

      fetch("http://localhost:4730/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((newTodoFromApi) => {
          // Never update state directly, use function
          todoState.todos.push(newTodoFromApi);
          renderState();
        })
        .catch((error) => console.error(error));
      inputNewTodo.value = "";
    }
  }
});

// * * * *  CHECK AND UNCHECK TODOS * * * *
todoList.addEventListener("change", (event) => {
  const idOfCurrentTodo = Number(event.target.parentNode.id);
  let updatedTodo = {};

  // get the todo object with a loop
  for (let currentTodo in todoState.todos) {
    if (todoState.todos[currentTodo].id === idOfCurrentTodo) {
      updatedTodo = todoState.todos[currentTodo];
    }
  }
  event.target.checked
    ? (event.target.parentNode.style.textDecoration = "line-through")
    : (event.target.parentNode.style.textDecoration = "none");
  updatedTodo.done = event.target.checked;

  // update state in backend
  fetch("http://localhost:4730/todos/" + `${idOfCurrentTodo}`, {
    method: "put",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(updatedTodo),
  }).catch((error) => console.error(error));
  renderState();
});

// * * * * FILTER TODOS * * * *
filterSelection.addEventListener("change", (event) => {
  if (event.target.checked) {
    todoState.currentFilter = event.target.value;
  }
  renderState();
});

// * * * * REMOVE ALL TODOS * * * *
btnRemoveAll.addEventListener("click", () => {
  todoState.todos.forEach((todo) => {
    fetch("http://localhost:4730/todos/" + `${todo.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        loadData();
      })
      .catch((error) => console.error(error));
  });
});

// * * * * REMOVE DONE TODOS * * * *
btnRemoveDone.addEventListener("click", () => {
  const doneTodos = todoState.todos.filter((todo) => todo.done === true);
  doneTodos.forEach((todo) => {
    fetch("http://localhost:4730/todos/" + `${todo.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        loadData();
      })
      .catch((error) => console.error(error));
  });
});

loadData();

// Never update state directly, use a function updateState()
