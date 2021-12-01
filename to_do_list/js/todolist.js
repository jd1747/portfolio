const todo = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const todo_key = "todo";

let todos = [];

function saveTodo() {
  localStorage.setItem(todo_key, JSON.stringify(todos));
}

function deleteTodo() {
  localStorage.removeItem(todo_key);
}

function addTodo() {
  const todoText = todoInput.value;
  const todoObj = {
    text: todoText,
    done: false,
  };
  todos.push(todoObj);
  saveTodo();
  todoInput.value = "";
  renderTodo();
}

function handleTodo(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

todo.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo();
});
