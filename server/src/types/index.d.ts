interface Todo {
  id: string;
  message: string;
}

interface MockDB {
  [id: string]: Todo;
}
