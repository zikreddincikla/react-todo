import React from 'react';
import './App.css';

function Todo({ id, todo, onToggle, onDelete }) {
  return (
    <li id='todo-item'>
      <p 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          opacity: todo.completed ? '0.5' : '1'
        }} 
        className='todo-p'
      >
        {todo.text}
      </p>
      <div className='buttons'>
        <button type='button' onClick={() => onToggle(id)}> 
          {todo.completed ? 'Undo' : 'Complete'} 
        </button>
        <button type='button' onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default Todo;