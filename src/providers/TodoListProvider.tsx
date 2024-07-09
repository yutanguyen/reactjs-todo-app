import { useState } from "react";
import TodoListContext, { Todo } from "../contexts/TodoListContext";

const TodoListProvider: React.FC<any> = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
