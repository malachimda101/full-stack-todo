import { Response, Request } from 'express';
import { TodoService } from '../services/todo.service';

class TodoController {
  public static async getTodos(req: Request, res: Response) {
    const todos: Todo[] = await TodoService.getTodos();
    return res.json(todos);
  }

  // public static getTodo(req: Request, res: Response) {
  //   res.send(TodoService.getTodoById(req.params.id));
  // }

  public static async postTodo(req: Request, res: Response) {
    const newTodo: Todo = await TodoService.postTodo(req, req.body.todo);
    return res.json(newTodo);
  }

  // public static deleteTodo(req: Request, res: Response) {
  //   res.send(TodoService.deleteTodo(req.params.id));
  // }

  // public static updateTodo(req: Request, res: Response) {
  //   res.send(TodoService.updateTodo(req.body.id, req.body.message));
  // }
}

export { TodoController };
