import * as actions from './TodoApp'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: actions.ADD_TODO,
      value: text,
    }
    expect(actions.addTodoAction(text)).toEqual(expectedAction)
  });
});