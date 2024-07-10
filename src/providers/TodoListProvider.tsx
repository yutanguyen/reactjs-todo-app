import { ReactNode, useState } from "react";
import TodoListContext, { Todo } from "../contexts/TodoListContext";

// Define a type for the props, including children
interface TodoListProviderProps {
  children: ReactNode;
}

const TodoListProvider: React.FC<TodoListProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
