// action types
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';

// action creators
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter: { filter },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  index: { id },
});

export const addTodoAction = value => ({
  type: ADD_TODO,
  value,
});
