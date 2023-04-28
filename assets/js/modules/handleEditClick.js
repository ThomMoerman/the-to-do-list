import { saveTodos } from "./saveToDo.js";


// Edit via prompt 

// export function handleEditClick(event) {
//     if (event.target.classList.contains('edit-btn')) {
//       const li = event.target.parentNode;
//       const span = li.querySelector('span');
//       const text = span.textContent;
//       const newTodoText = prompt('Edit todo:', text);
//       if (newTodoText !== null && newTodoText.trim() !== '') {
//         span.textContent = newTodoText.trim();
//         saveTodos();
//       }
//     }
//   }


// Edit via dialogBox

export function handleEditClick(event) {
    if (event.target.classList.contains('edit-btn')) {
        const li = event.target.parentNode;
        const span = li.querySelector('span');
        const text = span.textContent;

        // Create dialogBox elements and add class to each
        const dialog = document.createElement('dialog');
        const form = document.createElement('form');
        form.classList.add("dialog-form")
        const label = document.createElement('label');
        label.classList.add("dialog-label");
        const input = document.createElement('input');
        input.classList.add("dialog-input")
        const submitButton = document.createElement('button');
        submitButton.classList.add("edit-btn")

        // Set dialogInput with the task to edit
        input.value = text;

        // Set dialogBox elements content
        label.textContent = 'Edit todo:';
        submitButton.textContent = 'Save changes';

        // Add element to Document
        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(submitButton);
        dialog.appendChild(form);

        // Add eventListener on submitButton to close dialogBox and edit the task
        submitButton.addEventListener('click', () => {
            const newTodoText = input.value.trim();
            if (newTodoText !== '') {
                span.textContent = newTodoText;
                saveTodos();
                dialog.close();
            }
        });

        // Add the dialogBox to body 
        document.body.appendChild(dialog); // Error if the dialog isn't attached to body
        dialog.showModal(); //showModal() method of the HTMLDialogElement interface displays the dialog as a modal
    }
}