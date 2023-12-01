/// <reference types="cypress" />

describe("my CBE todo app with api", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://127.0.0.1:5500/src/index.html");
  });

  it("displays zero todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get("#todo-list li").should("have.length", 0);
  });

  it("add new todo", () => {
    const newTodo = "learn cypress";

    cy.get("#input-new-todo").type(`${newTodo}{enter}`);
    cy.get("#btn-add").click();
  });

  it("check todo", () => {
    cy.get("#todo-list li").find("input[type=checkbox]").check();
  });

  it("remove done todo", () => {
    cy.get("#btn-remove-done").click();
  });
});
