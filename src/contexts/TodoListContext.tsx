import { createContext } from "react";

// Create context
export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface TodoListContextType {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListContext = createContext<TodoListContextType | undefined>(
  undefined
);

export default TodoListContext;
