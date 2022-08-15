import { Request, Response } from 'express';
import dbConfig from '../configs/db.config';
import Todo from '../entities/todo.entity';

class TodoService {
  public static async getTodos(): Promise<Todo[]> {
    return await dbConfig.getRepository(Todo).find();
  }
  // public static getTodoById(id: string): Todo {
  //   return mockDB[id];
  // }
  public static async postTodo(req: Request, todo: Todo) {
    const newTodo: Todo = dbConfig.getRepository(Todo).create(todo);
    const results: Todo = await dbConfig.getRepository(Todo).save(newTodo);
    return results;
  }
  // public static deleteTodo(id: string): void {
  //   delete mockDB[id];
  // }
  // public static updateTodo(id: string, newMessage: string): Todo {
  //   mockDB[id] ? (mockDB[id].message = newMessage) : (mockDB[id] = { id, message: newMessage });
  //   return mockDB[id];
  // }
}

export { TodoService };
