import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import NameForm from './components/NameForm';
import Calculator from './components/Calculator';
import NumberList from './components/NumberList';
import TodoApp from './components/TodoApp';
import todoAppReducer from './reducers/TodoApp';

const store = createStore(
  todoAppReducer,
  applyMiddleware(thunkMiddleware),
);

ReactDOM.render(
  <div>
    <NumberList numbers={[1, 2, 3, 4]} />
    <NameForm />
    <Calculator />
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </div>,
  document.getElementById('app'),
);
