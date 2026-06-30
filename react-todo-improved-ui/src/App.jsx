import React, { useRef, useState } from 'react';
import './accordian.css';
import AddTodoText from '@/components/addTodo';
import TodoItem from '@/components/todoItem';
import TodoFilters from '@/components/todoFilters';

const App = () => {
  const [data, setData] = useState('');
  const [editTxt, setEditTxt] = useState('');
  const [editId, setEditId] = useState(null);
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState('all');
  const dragItem = useRef(null);
  const dragItem2 = useRef(null);

  function DeleteItem(id) {
    setTodo(todo.filter((item) => item.id !== id));
  }

  function CheckMark(id) {
    setTodo(
      todo.map((item) =>
        id === item.id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function dragNdrop() {
    const _todos = [...todo];
    const drag = _todos.splice(dragItem.current, 1)[0];
    _todos.splice(dragItem2.current, 0, drag);
    dragItem.current = null;
    dragItem2.current = null;
    setTodo(_todos);
  }

  function editTxtNId(id, currentText) {
    setEditId(id);
    setEditTxt(currentText);
  }

  const list = todo.filter((item) => {
    if (filter === 'active') return !item.complete;
    if (filter === 'complete') return item.complete;
    return true;
  });

  const count = todo.filter((item) => !item.complete).length;

  return (
    <div className='todo-container'>
      <h2>The Todo App</h2>
      <AddTodoText
        data={data}
        setData={setData}
        todo={todo}
        setTodo={setTodo}
      />
      <ul>
        {list.map((item, index) => (
          <TodoItem
            item={item}
            index={index}
            todo={todo}
            setTodo={setTodo}
            editId={editId}
            setEditId={setEditId}
            editTxt={editTxt}
            setEditTxt={setEditId}
            dragItem={dragItem}
            dragItem2={dragItem2}
            dragNdrop={dragNdrop}
            CheckMark={CheckMark}
            editTxtNId={editTxtNId}
            DeleteItem={DeleteItem}
          />
        ))}
      </ul>
      <TodoFilters
        count={count}
        filter={filter}
        setFilter={setFilter}
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
};

export default App;
