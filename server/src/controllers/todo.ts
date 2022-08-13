import { Response, Request } from 'express';

const getTodos = (req: Request, res: Response) => {
  res.json('sending a todo');
};

export { getTodos };
