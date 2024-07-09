import { createContext } from "react";

// Create context
export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const TodoListContext = createContext<Todo[] | any>([]);

export default TodoListContext;
