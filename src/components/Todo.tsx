import { useContext } from "react";
import TodoListContext, { type Todo } from "../contexts/TodoListContext";

function Todo(todo: Todo) {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("TodoList must be used within a TodoListProvider");
  }
  const { todoList, setTodoList } = context;

  const handleRemove = () => {
    setTodoList(todoList.filter((t: Todo) => t.id !== todo.id));
  };

  const handleToggleTodo = () => {
    setTodoList(
      todoList.map((t: Todo) => {
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
