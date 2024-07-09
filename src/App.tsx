import { useContext, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListContext from "./contexts/TodoListContext";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const { todoList, setTodoList } = useContext(TodoListContext);

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: any) => {
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
      <TodoList></TodoList>
    </>
  );
}

export default App;
