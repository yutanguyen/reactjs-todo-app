import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Create context
interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const todoContext = createContext<Todo[]>([]);

// Provider

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <todoContext.Provider value={todo}>
      <App />
    </todoContext.Provider>
  </React.StrictMode>
);
