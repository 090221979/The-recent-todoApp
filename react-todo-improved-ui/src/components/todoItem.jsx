import React from 'react';
import NewData from './upDatedData';

export default function TodoItem({
  item,
  index,
  todo,
  setTodo,
  editId,
  setEditId,
  editTxt,
  setEditTxt,
  dragItem,
  dragItem2,
  dragNdrop,
  CheckMark,
  editTxtNId,
  DeleteItem,
}) {
  return (
    <li
      className={item.complete ? 'overwrite' : ''}
      draggable
      onDragStart={() => (dragItem.current = index)}
      onDragEnter={() => (dragItem2.current = index)}
      onDragEnd={dragNdrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="container">
        <input
          checked={item.complete}
          type="checkbox"
          onChange={() => CheckMark(item.id)}
        />
        <span className="txt-area">{item.text}</span>

        <span>
          {editId === item.id ? (
            <NewData
              editTxt={editTxt}
              setTodo={setTodo}
              todo={todo}
              setEditTxt={setEditTxt}
              setEditId={setEditId}
              editId={editId}
            />
          ) : (
            <>
              <button onClick={() => editTxtNId(item.id, item.text)}>
                Edit Mode
              </button>
              <button className="btn1" onClick={() => DeleteItem(item.id)}>
                Delete
              </button>
            </>
          )}
        </span>
      </div>
    </li>
  );
}
