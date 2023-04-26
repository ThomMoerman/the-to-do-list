import { saveTodos } from "./saveToDo.js";

export function toggleTodoComplete(event) {

    if (event.target.type === 'checkbox') {
        // Get the parent li element
        const li = event.target.parentNode;
        // Toggle the completed class on the li element
        li.classList.toggle('completed');

        // Save the todos items to the local storage
        saveTodos();
    }
}

export function deleteCompletedTodos() {
    // Get all the completed todos items
    const completedTodos = document.querySelectorAll('.completed');

    // Loop through the completed todos items and remove them
    completedTodos.forEach(todo => todo.remove());

    // Save the todos items to the local storage
    saveTodos();
}