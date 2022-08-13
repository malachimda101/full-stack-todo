import express from 'express';
import { getTodos } from '../controllers/todo';
const todoRouter = express.Router();

todoRouter.get('/', getTodos);

export { todoRouter };
