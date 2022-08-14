import { useState } from 'react';
import Todo from './todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = () => {
    setTodoList((prevList) => [...prevList, { message: inputValue, id: crypto.randomUUID() }]);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todo: Todo) => (
          <Todo todo={todo} setTodoList={setTodoList} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
