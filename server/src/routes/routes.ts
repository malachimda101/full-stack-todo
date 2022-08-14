import { todoRouter } from './todo.routes';
import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/todo', todoRouter);

export { apiRouter };
