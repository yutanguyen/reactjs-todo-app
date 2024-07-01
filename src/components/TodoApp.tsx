import { useState } from "react";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo !== "") {
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItem = {
        id: newId,
        title: newTodo,
        completed: false,
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (id: string) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos([...newTodos]);
  };

  const handleRemoveTodo = (id: string) => {
    const updatedTodos = todos.filter((todoItem) => todoItem.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button style={{ margin: 20 }} onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li style={{ listStyleType: "none" }}>
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => handleToggleComplete(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                margin: 20,
              }}
            >
              {todo.title}
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
