// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import './styles.css';
import { Todo, TodoList } from './classes';
import { CrearTodohtml } from './JS/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(CrearTodohtml);