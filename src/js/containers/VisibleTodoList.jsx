import { connect } from 'react-redux';
import { toggleTodo } from '../actions/TodoApp';
import TodoList from '../components/TodoList';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.visibilityLayer),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
