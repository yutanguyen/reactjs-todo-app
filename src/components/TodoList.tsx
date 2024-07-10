import { useContext } from "react";
import Todo from "./Todo";
import TodoListContext from "../contexts/TodoListContext";

function TodoList() {
  const { todoList } = useContext(TodoListContext);

  return (
    <>
      <ul>
        {todoList.map((todo) => (
          <li>
            <Todo key={todo.id} {...todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
