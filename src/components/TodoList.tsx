import { useContext } from "react";
import Todo from "./Todo";
import TodoListContext from "../contexts/TodoListContext";

function TodoList() {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("TodoList must be used within a TodoListProvider");
  }
  const { todoList } = context;

  const todoListStyle = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <>
      <ul style={todoListStyle}>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
