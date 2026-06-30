
export default function DeleteCompletedTask({ todo, setTodo }) {
  function handleDetete() {
    setTodo(todo.filter((item) => !item.complete));
  }

  return (
    <div>
      {todo.some((item) => item.complete) && (
        <button className="del-btn" onClick={handleDetete}>
          Delete Completed
        </button>
      )}
    </div>
  );
}
