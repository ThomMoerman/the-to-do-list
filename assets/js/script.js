// Define variables
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const deleteCompletedBtn = document.querySelector('#delete-completed-btn');

import { addTodo } from "./modules/addToDo";
import { loadTodos } from "./modules/loadToDo";

loadTodos();