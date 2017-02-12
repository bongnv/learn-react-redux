import * as ActionTypes from '../actions/RedditApp';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [
  ]
};

const redditAppReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.INVALIDATE:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case ActionTypes.REQUESTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case ActionTypes.RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
      });
    default:
      return state;
  }
};

export default redditAppReducer;