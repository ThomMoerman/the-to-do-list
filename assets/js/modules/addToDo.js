// Define variables
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

import { saveTodos } from "./saveToDo.js";

export function addTodo() {
    // Get the value of the input
    const todoText = todoInput.value.trim();

    // Return if input is empty
    if (!todoText) {
        return;
    }

    // Create a new li element and add the necessary elements
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    // Set the attributes for the checkbox
    checkbox.type = 'checkbox';

    // Set the text content for the span
    span.textContent = todoText;

    // Set the attributes for the delete button
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        saveTodos();
    });

    // Set the attributes for the edit button
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    // Append the elements to the li element
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append the li element to the ul element
    todoList.appendChild(li);

    // Clear the input
    todoInput.value = '';

    // Save the todos items to the local storage
    saveTodos();
}