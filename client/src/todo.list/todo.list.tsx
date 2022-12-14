import axios from 'axios';
import { useEffect, useState } from 'react';
import Todo from './todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    axios
      .get('/api/todo')
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      message: inputValue,
      id: crypto.randomUUID()
    };
    axios.post('/api/todo', newTodo);
    setTodoList((prevList) => [...prevList, newTodo]);
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
