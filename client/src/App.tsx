import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './page.not.found';
import TodoList from './todo.list/todo.list';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TodoList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
