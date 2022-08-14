import { Response, Request } from 'express';
import { TodoService } from '../services/todo.service';

class TodoController {
  public static getTodos(req: Request, res: Response): Todo[] {
    return TodoService.getTodos();
  }

  public static getTodo(req: Request, res: Response): Todo {
    return TodoService.getTodoById(req.params.id);
  }

  public static postTodo(req: Request, res: Response): void {
    TodoService.postTodo(req.body.todo);
  }

  public static deleteTodo(req: Request, res: Response): void {
    TodoService.deleteTodo(req.params.id);
  }

  public static updateTodo(req: Request, res: Response): Todo {
    return TodoService.updateTodo(req.body.todo.id, req.body.todo.message);
  }
}

export { TodoController };
