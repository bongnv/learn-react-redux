import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/TodoApp';

const AddTodo = connect()(({ dispatch }) => {
  console.log(dispatch);
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodoAction(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
});

export default AddTodo;
