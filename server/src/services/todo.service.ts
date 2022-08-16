import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import dbConfig from '../configs/db.config';
import Todo from '../entities/todo.entity';

class TodoService {
  public static async getTodos(req: Request): Promise<Todo[]> {
    return await dbConfig.getRepository(Todo).find();
  }
  public static async getTodoById(req: Request): Promise<Todo> {
    const todo: Todo | null = await dbConfig.getRepository(Todo).findOneBy({ id: req.params.id });
    if (!todo) {
      throw new Error(`Todo with id ${req.params.id} not found.`);
    } else {
      return todo;
    }
  }
  public static async postTodo(req: Request): Promise<Todo[]> {
    const newTodo: Todo[] = dbConfig.getRepository(Todo).create(req.body);
    return await dbConfig.getRepository(Todo).save(newTodo);
  }

  public static async deleteTodo(req: Request): Promise<DeleteResult> {
    return await dbConfig.getRepository(Todo).delete(req.params.id);
  }
  public static async updateTodo(req: Request): Promise<Todo> {
    const todo = await dbConfig.getRepository(Todo).findOneBy({ id: req.body.id });
    if (!todo) throw new Error(`Unable to delete. Todo with id ${req.body.id} not found.`);
    const updatedTodo: Todo = dbConfig.getRepository(Todo).merge(todo, req.body);
    return await dbConfig.getRepository(Todo).save(updatedTodo);
  }
}

export { TodoService };
