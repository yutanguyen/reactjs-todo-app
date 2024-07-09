function Todo(todo) {
  return (
    <>
      <p key={todo.id}>{todo.title}</p>
    </>
  );
}

export default Todo;
