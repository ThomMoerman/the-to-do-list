// Define variables
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const deleteCompletedBtn = document.querySelector('#delete-completed-btn');

import { addTodo } from "./modules/addToDo";
import { loadTodos } from "./modules/loadToDo";
import { saveTodos } from "./modules/saveToDo";
import { toggleTodoComplete, deleteCompletedTodos } from "./modules/completed";

// Load the todos items from the local storage on page load
loadTodos();

// Add event listeners
todoForm.addEventListener('submit', event => {
    event.preventDefault();
    addTodo();
});

todoList.addEventListener('click', toggleTodoComplete);

deleteCompletedBtn.addEventListener('click', deleteCompletedTodos);

document.addEventListener('click', event => {
    if (event.target.classList.contains('edit-btn')) {
        const li = event.target.parentNode;
        const span = li.querySelector('span');
        const text = span.textContent;
        const newTodoText = prompt('Edit todo:', text);
        if (newTodoText !== null && newTodoText.trim() !== '') {
            span.textContent = newTodoText.trim();
            saveTodos();
        }
    }
});