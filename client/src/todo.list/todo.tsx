import axios from 'axios';
import { useState } from 'react';

interface Props {
  todo: Todo;
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todo: React.FC<Props> = ({ todo, setTodoList }) => {
  const [edit, setEdit] = useState<string | null>(null);

  const handleDelete = () => {
    axios.delete(`/api/todo/${todo.id}`);
    setTodoList((prevList) => prevList.filter((prevTodo: Todo) => prevTodo.id !== todo.id));
  };

  const handleEdit = () => {
    if (!edit) return;
    axios.patch('/api/todo', { ...todo, message: edit });
    setTodoList((prevList) => {
      todo.message = edit;
      return [...prevList];
    });
    setEdit(null);
  };

  return (
    <li key={todo.id}>
      {!edit ? (
        <p>{todo.message}</p>
      ) : (
        <div>
          <input
            type="text"
            value={edit}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEdit(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      )}
      <button onClick={() => setEdit(todo.message)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Todo;
