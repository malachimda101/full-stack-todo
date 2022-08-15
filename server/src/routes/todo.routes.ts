import express from 'express';
import { TodoController } from '../controllers/todo.controller';
const todoRouter = express.Router();

todoRouter.get('/', TodoController.getTodos);
// todoRouter.get('/:id', TodoController.getTodo);
todoRouter.post('/', TodoController.postTodo);
// todoRouter.delete('/:id', TodoController.deleteTodo);
// todoRouter.patch('/', TodoController.updateTodo);

export { todoRouter };
