import React from 'react';
import Footer from './Footer';
import AddTodo from './../containers/AddTodo';
import VisibleTodolist from './../containers/VisibleTodoList';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);

export default TodoApp;
