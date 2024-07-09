import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TodoListProvider from "./providers/TodoListProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoListProvider>
      <App />
    </TodoListProvider>
  </React.StrictMode>
);
