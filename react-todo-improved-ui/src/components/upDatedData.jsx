export default function NewData({
  editTxt,
  setTodo,
  todo,
  setEditTxt,
  setEditId,
  editId,
}) {
  function updateWithNewData() {
    if (editTxt.trim() !== '') {
      setTodo(
        todo.map((item) =>
          item.id === editId ? { ...item, text: editTxt } : item
        )
      );
    }
    setEditId(null);
    setEditTxt('');
  }

  return (
    <div>
      <input
        value={editTxt}
        onChange={(e) => setEditTxt(e.target.value)}
        onFocus
        onKeyDown={(e) => e.key === 'Enter' && updateWithNewData()}
      />
      <button onClick={updateWithNewData}>Update</button>
    </div>
  );
}
