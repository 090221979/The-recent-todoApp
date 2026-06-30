import React from 'react';
import DeleteCompletedTask from './deleteCompletedTask';

export default function TodoFilters({ count, filter, setFilter, todo, setTodo }) {
  const filterOptions = ['complete', 'active', 'all'];

  return (
    <div className="container">
      <span className="count">
        {count} item{count === 1 ? '' : 's'}
      </span>
      <span>
        {filterOptions.map((item) => (
          <button 
            onClick={() => setFilter(item)} 
            key={item}
            className={filter === item ? 'active-filter' : ''} // Good for adding visual state highlights later
          >
            {item}
          </button>
        ))}
      </span>
      <span>
        <DeleteCompletedTask todo={todo} setTodo={setTodo} />
      </span>
    </div>
  );
}
