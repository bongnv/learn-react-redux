import React from 'react';
import Todo from './Todo';


const TodoList = (todos) => {
  console.log('todos:');
  console.log(todos);
  return (
    <ul>
      {
        todos.todos.map((todo) => {
          console.log(todo);
          return (
            <Todo
              key={todo.id}
              isCompleted={todo.completed}
              text={todo.text}
            />
          );
        })
      }
    </ul>
  );
};

export default TodoList;
