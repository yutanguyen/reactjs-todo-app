import { useContext } from "react";
import Todo from "./Todo";
import TodoListContext from "../contexts/TodoListContext";

function TodoList() {
  const { todoList } = useContext(TodoListContext);

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
