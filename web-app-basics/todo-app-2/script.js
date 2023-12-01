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

// load from local storage
if (localStorage.getItem("state")) {
  todoState = JSON.parse(localStorage.getItem("state"));
  renderState();
}

// * * * * ADD * * * *
btnAdd.addEventListener("click", () => {
  todoState.todos.push({ description: inputNewTodo.value, done: false });

  console.log(todoState.todos);
  inputNewTodo.value = "";
  localStorageFn();
  renderState();
});

// render every time a change happens // if filter = done and you undo a todo it should disappear to open todos
todoList.addEventListener("change", () => {
  renderState();
});

// * * * * FILTER * * * *
filterSelection.addEventListener("change", (event) => {
  if (event.target.checked) {
    todoState.currentFilter = event.target.value;
  }
  renderState();
  localStorageFn();
});

// render den State/ visualisiere den state im browser
function renderState() {
  todoList.innerHTML = "";
  // create html elements

  // check the currentFilter und set the input on checked, which value matches the currentfilter
  if (todoState.currentFilter === "all") {
    filterAll.checked = "true";
  }
  if (todoState.currentFilter === "open") {
    filterOpen.checked = "true";
  }
  if (todoState.currentFilter === "done") {
    filterDone.checked = "true";
  }
  const generatedState = generateFilterState(); // MAYDe

  generatedState.todos.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.innerText = todo.description;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todoList.appendChild(newLi);
    newLi.appendChild(checkbox);

    if (todo.done === true) {
      newLi.style.textDecoration = "line-through";
      checkbox.checked = "true";
    }

    //change style and state
    newLi.addEventListener("change", () => {
      checkbox.checked
        ? (newLi.style.textDecoration = "line-through")
        : (newLi.style.textDecoration = "none");
      todo.done = checkbox.checked;
      localStorageFn();
    });
  });
}

// erstelle eine Statekopie/ändere den State abhängig von der gesetzten Filter Methode
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

// default todo
if (todoState.todos.length === 0) {
  todoState.todos.push({
    description: "default todo",
    id: "todo-" + todoState.todos.length,
    done: false,
  });
  renderState();
}
// * * * * REMOVE ALL * * * *
btnRemoveAll.addEventListener("click", () => {
  todoState.todos = [];
  localStorage.clear();
  renderState();
});

// * * * * REMOVE DONE * * * *
btnRemoveDone.addEventListener("click", () => {
  todoState.todos = todoState.todos.filter((todo) => todo.done === false);
  localStorageFn();
  renderState();
});

function localStorageFn() {
  localStorage.setItem("state", JSON.stringify(todoState));
}

// was fehlt noch??
// duplicate check
