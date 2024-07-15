import { Link } from "react-router-dom";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div>
        <Link to={`/login`}>Login</Link>
      </div>
      <TodoApp />
    </>
  );
}

export default App;
