import { saveTodos } from "./saveToDo.js";

export function handleEditClick(event) {
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
  }