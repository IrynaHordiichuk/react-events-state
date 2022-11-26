import React from 'react';
import './TodoList.css';

// here is closure )))
const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className='TodoList'>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className='TodoList__item'>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Remove</button>
      </li>
    ))} 
  </ul>
);

export default TodoList;
