// Define variables
const todoList = document.querySelector('#todo-list');

import { saveTodos } from "./saveToDo.js";

export function loadTodos() {
    // Get the todos array from the local storage
    const todos = JSON.parse(localStorage.getItem('todos'));

    // Return if the todos array is empty
    if (!todos) {
        return;
    }

    // Loop through the todos array and create the li elements
    todos.forEach(todo => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const editBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        span.textContent = todo.text;
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        if (todo.completed) {
            li.classList.add('completed');
        }

        deleteBtn.addEventListener('click', () => {
            li.remove();
            saveTodos();
        });
        todoList.appendChild(li);
    });
}