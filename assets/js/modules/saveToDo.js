export function saveTodos() {
    // Get all the todo items
    const todos = todoList.querySelectorAll('li');

    // Create an array to store the todos
    const todoItems = [];

    // Loop through the todo items and add them to the array
    todos.forEach(todo => {
        todoItems.push({
            text: todo.querySelector('span').textContent,
            completed: todo.classList.contains('completed')
        });
    });

    // Store the todos array in the local storage
    localStorage.setItem('todos', JSON.stringify(todoItems));
}