import { mockDB } from '../models/mock.db';

class TodoService {
  public static getTodos(): Todo[] {
    return Object.values(mockDB);
  }
  public static getTodoById(id: string): Todo {
    return mockDB[id];
  }
  public static postTodo(todo: Todo): void {
    mockDB[todo.id] = todo;
  }
  public static deleteTodo(id: string): void {
    delete mockDB[id];
  }
  public static updateTodo(id: string, newMessage: string): Todo {
    mockDB[id] ? (mockDB[id].message = newMessage) : (mockDB[id] = { id, message: newMessage });
    return mockDB[id];
  }
}

export { TodoService };
