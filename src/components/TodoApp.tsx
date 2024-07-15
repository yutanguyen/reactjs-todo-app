import { ChangeEvent, useContext, useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import TodoListContext from "../contexts/TodoListContext";
import TodoList from "./TodoList";

function TodoApp() {
  const context = useContext(TodoListContext);
  console.log(context);

  if (!context) {
    throw new Error("TodoList must be used within a TodoListProvider");
  }
  const { todoList, setTodoList } = context;
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodoList([
        ...todoList,
        {
          id: uuidv4(),
          title: input,
          isCompleted: false,
        },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <h1>Todo App using Context</h1>
      <div>
        <input type="text" value={input} onChange={handleInput} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList />
    </>
  );
}

export default TodoApp;
