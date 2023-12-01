"use strict";

const app = Vue.createApp({
  data() {
    return {
      todos: [],
      newTodoDescription: "",
      currentFilter: "all",
    };
  },

  computed: {
    filteredTodos() {
      switch (this.currentFilter) {
        case "all":
          return this.todos;
        case "done":
          return this.todos.filter((todo) => todo.done === true);
        case "open":
          return this.todos.filter((todo) => todo.done === false);
      }
    },
  },

  methods: {
    refresh() {
      fetch("http://localhost:4730/todos")
        .then((response) => response.json())
        .then((data) => (this.todos = data));
    },
    setFilter(event) {
      this.currentFilter = event;
    },

    addTodo() {
      const newTodo = { description: this.newTodoDescription, done: false };
      fetch("http://localhost:4730/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then((response) => response.json())
        .then((todosFromApi) => {
          this.todos.push(todosFromApi);
        });
      this.newTodoDescription = "";
      this.refresh();
    },

    deleteDoneTodos() { 
      const doneTodos = this.todos.filter((todo) => todo.done === true);
      doneTodos.forEach((todo) => {
        fetch("http://localhost:4730/todos/" + `${todo.id}`, {
          method: "DELETE",
        }).then((response) => response.json());
      });
    },

    updateTodoState(todo) {
      fetch("http://localhost:4730/todos/" + `${todo.id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(todo),
      });
    },
  },
  mounted() {
    this.refresh();
  },
});

app.mount("#app");
