"use strict";

const btnAdd = document.querySelector("#btn-add");
const inputNewTodo = document.querySelector("#input-new-todo");

const todoList = document.querySelector("#todo-list");
const btnRemoveAll = document.querySelector("#btn-remove-all");
const btnRemoveDone = document.querySelector("#btn-remove-done");

const filterCon = document.querySelector("#filter");
const filterAll = document.querySelector("#filter-all");
const filterDone = document.querySelector("#filter-done");
const filterOpen = document.querySelector("#filter-open");

let todoArray = [];
let filterState = filterAll;

// ***** RELOAD FROM LOCAL STORAGE *****
// reload todos
if (localStorage.getItem("todoArray") !== null) {
  todoArray = JSON.parse(localStorage.getItem("todoArray"));
  console.log(todoArray);
}
// reload filter
if (localStorage.getItem("filterState") !== null) {
  if (localStorage.getItem("filterState") === "filterAll") {
    filterAll.checked = "true"; // verbindung zum Browser finden wie bei checkbox
  }
  if (localStorage.getItem("filterState") === "filterDone") {
    filterDone.checked = "true";
  }
  if (localStorage.getItem("filterState") === "filterOpen") {
    filterOpen.checked = "true";
  }
  console.log(todoArray);
  console.log(localStorage.getItem("filterState"));
  console.log(filterState);
  filterStateFn();
}

// * * * * FILTER * * * *
document.addEventListener("change", () => {
  filterStateFn();
});
function filterStateFn() {
  if (filterDone.checked) {
    filterState = filterDone;
    localStorage.setItem("filterState", "filterDone");
    const doneTodos = todoArray.filter((todo) => todo.done === true);
    createElement(doneTodos);
  }
  if (filterOpen.checked) {
    filterState = filterOpen;
    localStorage.setItem("filterState", "filterOpen");
    const openTodos = todoArray.filter((todo) => todo.done === false);
    createElement(openTodos);
  }
  if (filterAll.checked) {
    filterState = filterAll;
    localStorage.setItem("filterState", "filterAll");
    createElement(todoArray);
  }
}

// * * * * FUNCTION TO CREATE HTML ELEMENTS and sync  * * * *
function createElement(currentArray) {
  // purge current list
  todoList.innerHTML = "";
  currentArray.forEach((todo) => {
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(todo.description);
    newLi.appendChild(newLiText);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done; // sync

    newLi.addEventListener("change", (e) => {
      const newTodoDoneState = e.target.checked;
      todo.done = newTodoDoneState;
      // style text when checkbox is checked
      if (todo.done === true) {
        e.currentTarget.style.textDecoration = "line-through";
      } else e.currentTarget.style.textDecoration = "none";
      localStorage.setItem("todoArray", JSON.stringify(currentArray));
    });

    newLi.appendChild(checkbox);

    // create unique id for every todo // NOT WORKING PROPERly include timespam
    checkbox.id = "timestamp";

    todoList.appendChild(newLi);

    // style text when reload
    if (todo.done === true) {
      newLi.style.textDecoration = "line-through";
    }
  });
}

// default todo
if (todoArray.length === 0) {
  todoArray.push({
    description: "default todo",
    id: "todo-" + todoArray.length,
    done: false,
  });
  createElement(todoArray);
}

// * * * * ADD TODO * * * *
btnAdd.addEventListener("click", () => {
  if (inputNewTodo.value.trim().length > 0) {
    // check for duplicate, case insensitive
    const included = todoArray.some(
      (todo) =>
        todo.description.toLowerCase() ===
        inputNewTodo.value.trim().toLowerCase()
    );

    if (!included) {
      todoArray.push({
        description: inputNewTodo.value.trim(),
        id: "todo-" + todoArray.length,
        done: false,
      });
      localStorage.setItem("todoArray", JSON.stringify(todoArray));
      // clear input field after "add"
      inputNewTodo.value = "";

      // create new list
      filterStateFn();
    }
  }
});

// * * * * REMOVE ALL * * * *
btnRemoveAll.addEventListener("click", () => {
  localStorage.clear();
  todoArray = [];
  todoList.innerHTML = "";
});

// * * * * REMOVE DONE TODOS * * * *
btnRemoveDone.addEventListener("click", () => {
  todoArray = todoArray.filter((todo) => todo.done === false);
  createElement(todoArray);
});
