import { Response, Request } from 'express';
import { DeleteResult } from 'typeorm';
import { TodoService } from '../services/todo.service';

class TodoController {
  public static async getTodos(req: Request, res: Response) {
    const todos: Todo[] = await TodoService.getTodos(req);
    return res.json(todos);
  }

  public static async getTodo(req: Request, res: Response) {
    const todo: Todo = await TodoService.getTodoById(req);
    return res.json(todo);
  }

  public static async postTodo(req: Request, res: Response) {
    const newTodo: Todo[] = await TodoService.postTodo(req);
    return res.json(newTodo);
  }

  public static async deleteTodo(req: Request, res: Response) {
    const deletedTodo: DeleteResult = await TodoService.deleteTodo(req);
    return res.json(deletedTodo);
  }

  public static async updateTodo(req: Request, res: Response) {
    const updatedTodo: Todo = await TodoService.updateTodo(req);
    return res.json(updatedTodo);
  }
}

export { TodoController };
