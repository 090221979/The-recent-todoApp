import React from 'react';

export default function AddTodoText({ data, setData, todo, setTodo }) {
  function handleAdd() {
    if (data.trim() === '') return;
    const newTodoItem = {
      id: Date.now(),
      text: data,
      complete: false,
    };
    setTodo([...todo, newTodoItem]);
    setData(''); // Clear the main input field
  }

  return (
    <div className="container">
      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Please enter your todo..."
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
