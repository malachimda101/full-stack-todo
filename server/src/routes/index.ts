import { todoRouter } from './todo';
import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/todo', todoRouter);

export { apiRouter };
