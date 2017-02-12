import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, TOGGLE_TODO, ADD_TODO } from './../actions/TodoApp';

const visibilityFilterReducers = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

let todoId = 0;

const todosReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      todoId += 1;
      return [
        ...state,
        {
          id: todoId,
          text: action.value,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.slice(0, action.index)
            .concat();
    default:
      return state;
  }
};

const todoAppReducer = combineReducers({
  visibilityFilter: visibilityFilterReducers,
  todos: todosReducers,
});

export default todoAppReducer;
