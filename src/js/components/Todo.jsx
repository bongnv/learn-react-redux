import React from 'react';

const Todo = ({ isCompleted, text }) => (
  <li
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  isCompleted: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Todo;
