// Define variables
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const deleteCompletedBtn = document.querySelector('#delete-completed-btn');

import { addTodo } from "./modules/addToDo.js";
import { loadTodos } from "./modules/loadToDo.js";
import { toggleTodoComplete, deleteCompletedTodos } from "./modules/completed.js";
import { handleEditClick } from "./modules/handleEditClick.js";

// Load the todos items from the local storage on page load
loadTodos();

// Add event listeners
todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

todoList.addEventListener('click', toggleTodoComplete);

deleteCompletedBtn.addEventListener('click', deleteCompletedTodos);

document.addEventListener('click', handleEditClick);
