import { Response, Request } from 'express';
import { TodoService } from '../services/todo.service';

class TodoController {
  public static getTodos(req: Request, res: Response) {
    res.send(TodoService.getTodos());
  }

  public static getTodo(req: Request, res: Response) {
    res.send(TodoService.getTodoById(req.params.id));
  }

  public static postTodo(req: Request, res: Response) {
    res.send(TodoService.postTodo(req.body.todo));
  }

  public static deleteTodo(req: Request, res: Response) {
    res.send(TodoService.deleteTodo(req.params.id));
  }

  public static updateTodo(req: Request, res: Response) {
    res.send(TodoService.updateTodo(req.body.id, req.body.message));
  }
}

export { TodoController };
