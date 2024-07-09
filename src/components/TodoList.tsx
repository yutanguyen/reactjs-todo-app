import { useContext } from "react";
import Todo from "./Todo";
import TodoListContext from "../contexts/TodoListContext";

function TodoList() {
  const { todoList } = useContext(TodoListContext);

  return (
    <>
      {todoList.map((todo) => (
        <Todo item={todo}></Todo>
      ))}
    </>
  );
}

export default TodoList;
