import { useContext } from "react";
import TodoListContext from "../contexts/TodoListContext";

function Todo(todo) {
  const { todoList, setTodoList } = useContext(TodoListContext);

  const handleRemove = () => {
    setTodoList(todoList.filter((t) => t.id !== todo.id));
  };

  const handleToggleTodo = () => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }

        return t;
      })
    );
  };

  const isCompletedStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
  };

  const todoStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    ...isCompletedStyle,
  };

  return (
    <>
      <div style={todoStyle}>
        <span className="todo-item" style={isCompletedStyle}>
          {todo.title}
        </span>
        <div>
          <button onClick={handleToggleTodo}>✅</button>
          <button onClick={handleRemove}>🗑️</button>
        </div>
      </div>
    </>
  );
}

export default Todo;
